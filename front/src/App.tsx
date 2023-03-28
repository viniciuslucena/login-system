import { Button } from "./components/Button"
import { Input } from "./components/Input"

function App() {
  return (
    <div className="columns-1 md:columns-2 bg-gray-50 h-screen">
      <div className="flex flex-col items-center md:items-start md:pl-28 justify-center h-full w-full">
        <img className="w-40 mb-10" src="logo.svg" alt="Vertigo logo" />
        <div className="w-96 px-4">
          <h2 className="mb-4 font-bold text-4xl text-gray-800">Acesse a plataforma</h2>
          <p className="text-gray-600">Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
          <div className="mt-10 mb-8">
            <Input
              label="E-mail"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              errorMsg="Digite um e-mail válido"
            />

            <Input
              label="Senha"
              name="senha"
              type="password"
              placeholder="Digite sua senha"
            />
          </div>
          <Button
            label="Entrar"
          />

          <p className="text-gray-600 mt-8">
            Ainda não tem uma conta? {" "}
            <span className="text-purple font-bold cursor-pointer">Inscreva-se</span>
          </p>
        </div>
      </div>
      <div className="hidden md:inline-block">
        <img className="w-screen h-screen" src="bg.png" />
      </div>
    </div>
  )
}

export default App
