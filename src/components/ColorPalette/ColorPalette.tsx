interface ColorPaletteProps {
  colors: {
    name: string
    classname: string
  }[]
}

export default function ColorPalette({ colors }: ColorPaletteProps) {
  return (
    <div className="absolute inset-x-0 top-0 bg-white text-black">
      {colors.map((color) => (
        <div className={color.classname}>{color.name}</div>
      ))}
    </div>
  )
}
