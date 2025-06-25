const BlurCircle = ({ top = "auto", left = "auto", right = "auto", bottom = "auto" }) => {
  return (
    <div
      className="absolute -z-10 w-[230px] h-[230px] rounded-full blur-3xl bg-[#6c5dd3] opacity-30"
      style={{ top, left, right, bottom }}
    />
  )
}

export default BlurCircle