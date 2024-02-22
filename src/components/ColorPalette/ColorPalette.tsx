interface ColorPaletteProps {
  colors: {
    name: string
    value: string
  }[]
}

export default function ColorPalette({ colors }: ColorPaletteProps) {
  return (
    <div className="absolute inset-x-0 top-0 bg-white text-black">
      {colors.map((color, i) => (
        <div key={i} style={{ backgroundColor: color.value }}>
          {color.name}
        </div>
      ))}
    </div>
  )
}
