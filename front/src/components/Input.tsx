import { useState } from "react"

interface InputProps {
  label: string,
  error?: boolean,
  errorMsg?: string,
  type: "text" | "password" | "email",
  name: string,
  placeholder?: string,
}

export const Input = ({ label, error = false, errorMsg, type, name, placeholder }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const changePasswordVisible = () => {
    setShowPassword(prevState => !prevState);
  }
  return (
    <div className="mb-4 flex flex-col justify-start">
      <div className="flex justify-between">
        <label
          htmlFor={name}
          className="mb-2 font-semibold text-gray-800"
        >
          {label}
        </label>
        {type === "password" && (
          <p className="text-purple font-semibold cursor-pointer">Esqueceu a senha?</p>
        )}
      </div>
      <div className="relative">
        <input
          id={name}
          type={type === "password" ? showPassword ? 'text' : 'password' : type}
          name={name}
          placeholder={placeholder}
          className={`w-full py-4 px-3 border border-gray-200 rounded hover:border-purple focus:outline-purple ${error && 'border-red-500'}`}
          autoComplete="off"
        />
        {type === "password" && (
          <img src={showPassword ? 'eye-off.svg' : 'eye.svg'} className="absolute right-3 top-4 cursor-pointer" onClick={changePasswordVisible} />
        )}
      </div>
      {error && (
        <p className="text-red-500 mt-1">{errorMsg}</p>
      )}
    </div>
  )
}