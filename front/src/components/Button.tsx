interface ButtonProps {
  label: string,
}

export const Button = ({ label }: ButtonProps) => {
  return (
    <button className="bg-purple hover:bg-[#9F67FF] active:bg-[#9F67FF] w-full rounded py-4">
      <p className="text-white font-bold">
        {label}
      </p>
    </button>
  )
}