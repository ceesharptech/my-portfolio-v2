import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { ImageSquare } from "@phosphor-icons/react";
import { usePortfolioTheme } from "./theme";

const collagePieces = [
  {
    id: "one",
    label: "Project photo placeholder",
    angle: -5,
    position: "left-[7%] top-[25%]",
    tone: "bg-[linear-gradient(145deg,#5f6d72,#d6c2a7_48%,#56604f)]",
  },
  {
    id: "two",
    label: "Workspace photo placeholder",
    angle: 4,
    position: "left-[33%] top-[28%]",
    tone: "bg-[linear-gradient(145deg,#aab9c5,#e4e6df_43%,#64716e)]",
  },
  {
    id: "three",
    label: "Interface photo placeholder",
    angle: 5,
    position: "right-[8%] top-[36%]",
    tone: "bg-[linear-gradient(145deg,#1a2023,#10141a_46%,#31343d)]",
  },
  {
    id: "quote",
    label: "Consistency is better than perfection. — Mark Twain",
    angle: -2,
    position: "left-[57%] top-[14%]",
    tone: "bg-[#f0efec] text-black",
  },
];

type Offset = { x: number; y: number };
type DragState = {
  id: string;
  pointerId: number;
  startX: number;
  startY: number;
  offset: Offset;
  rect: DOMRect;
};

function clampDelta(rect: DOMRect, dx: number, dy: number, bounds: DOMRect) {
  return {
    x: Math.max(bounds.left - rect.left, Math.min(bounds.right - rect.right, dx)),
    y: Math.max(bounds.top - rect.top, Math.min(bounds.bottom - rect.bottom, dy)),
  };
}

export function AboutCollage() {
  const light = usePortfolioTheme() === "light";
  const [offsets, setOffsets] = useState<Record<string, Offset>>({});
  const container = useRef<HTMLDivElement>(null);
  const drag = useRef<DragState | null>(null);

  function startDrag(event: PointerEvent<HTMLDivElement>, id: string) {
    event.preventDefault();
    const offset = offsets[id] ?? { x: 0, y: 0 };

    drag.current = {
      id,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      offset,
      rect: event.currentTarget.getBoundingClientRect(),
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function moveDrag(event: PointerEvent<HTMLDivElement>) {
    const activeDrag = drag.current;
    const bounds = container.current?.getBoundingClientRect();
    if (!activeDrag || activeDrag.pointerId !== event.pointerId || !bounds) {
      return;
    }

    const delta = clampDelta(
      activeDrag.rect,
      event.clientX - activeDrag.startX,
      event.clientY - activeDrag.startY,
      bounds,
    );

    setOffsets((current) => ({
      ...current,
      [activeDrag.id]: {
        x: activeDrag.offset.x + delta.x,
        y: activeDrag.offset.y + delta.y,
      },
    }));
  }

  function stopDrag(event: PointerEvent<HTMLDivElement>) {
    if (drag.current?.pointerId === event.pointerId) {
      drag.current = null;
    }
  }

  function moveWithKeys(event: KeyboardEvent<HTMLDivElement>, id: string) {
    const directions: Record<string, Offset> = {
      ArrowLeft: { x: -16, y: 0 },
      ArrowRight: { x: 16, y: 0 },
      ArrowUp: { x: 0, y: -16 },
      ArrowDown: { x: 0, y: 16 },
    };
    const movement = directions[event.key];
    const bounds = container.current?.getBoundingClientRect();
    if (!movement || !bounds) {
      return;
    }

    event.preventDefault();
    const delta = clampDelta(
      event.currentTarget.getBoundingClientRect(),
      movement.x,
      movement.y,
      bounds,
    );
    setOffsets((current) => {
      const previous = current[id] ?? { x: 0, y: 0 };
      return {
        ...current,
        [id]: { x: previous.x + delta.x, y: previous.y + delta.y },
      };
    });
  }

  return (
    <div
      ref={container}
      className={`relative min-h-125 overflow-hidden rounded-[13px] border bg-[radial-gradient(circle,#202023_1px,transparent_1px)] bg-size-[34px_34px] max-[760px]:min-h-92.5 max-[390px]:min-h-80 ${light ? "border-[#dededc] bg-white bg-[radial-gradient(circle,#e6e6e4_1px,transparent_1px)]" : "border-portfolio-line bg-portfolio-surface"}`}
      role="group"
      aria-label="A movable collage of image placeholders and a personal note"
    >
      {collagePieces.map((piece) => {
        const offset = offsets[piece.id] ?? { x: 0, y: 0 };
        const quote = piece.id === "quote";

        return (
          <div
            key={piece.id}
            className={`absolute z-1 flex cursor-grab touch-none select-none flex-col items-center justify-center gap-3 border-[5px] p-3.5 text-center shadow-[0_13px_30px_rgb(0,0,0,0.24)] transition-[box-shadow,filter] active:cursor-grabbing hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-blue max-[760px]:w-[26%] max-[760px]:border-4 max-[760px]:p-2 ${quote ? "aspect-[1.7] w-[29%] border-0 text-[19px] max-[760px]:w-[34%] max-[760px]:text-[15px]" : "aspect-[.75] w-[22%] text-[13px] max-[760px]:text-[11px]"} ${piece.position} ${piece.tone} ${light && !quote ? "border-white text-[#56565b]" : "border-[#f1f1ef] text-neutral-600"}`}
            role="button"
            tabIndex={0}
            aria-label={`${piece.label}. Drag or use arrow keys to move.`}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px) rotate(${piece.angle}deg)`,
            }}
            onPointerDown={(event) => startDrag(event, piece.id)}
            onPointerMove={moveDrag}
            onPointerUp={stopDrag}
            onPointerCancel={stopDrag}
            onKeyDown={(event) => moveWithKeys(event, piece.id)}
          >
            {quote ? (
              <span>{piece.label}</span>
            ) : (
              <>
                <ImageSquare size={20} />
                <span>{piece.label}</span>
              </>
            )}
          </div>
        );
      })}
      <p
        className={`absolute -bottom-9 right-0 m-0 text-[15px] uppercase max-[760px]:-bottom-7 max-[760px]:text-xs ${light ? "text-[#56565b]" : "text-portfolio-dim"}`}
      >
        Try moving things
      </p>
    </div>
  );
}
