import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"

const MailchimpForm = () => {
  const [result, setResult] = useState({})
  const [email, setEmail] = useState("")

  const handleChange = e => {
    setEmail(e.target.value)
  }

  const clearFields = () => {
    setEmail("")
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(email)
    console.log("Result: ", result)
    setResult(result)
    clearFields()
  }
  return (
    <>
      <div>
        {result.result == "success" ? (
          // <div>Your email was registered with success!</div>
          <TextSuccessMsg> Você foi registrado com sucesso! </TextSuccessMsg>
        ) : result.result == "error" ? (
          // <div>Error: Your email is not registered</div>
          <TextErrorMsg>
            Error: confira se você está passando um email correto e que não
            tenha sido registrado.{" "}
          </TextErrorMsg>
        ) : (
          <Form onSubmit={e => handleSubmit(e)}>
            <FormMsg>
              Registre seu email principal para receber os novos conteúdos
              publicados aqui no blog
            </FormMsg>
            <WrapperInput>
              <InputEmail
                name="email"
                value={email}
                onChange={handleChange}
                type="email"
                placeholder="Enter your Email..."
              />
              <BtnSubscribe>Enviar</BtnSubscribe>
            </WrapperInput>
          </Form>
        )}
      </div>
    </>
  )
}

export default MailchimpForm

export const TextErrorMsg = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
`

export const TextSuccessMsg = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
`

export const Form = styled.form`
  width: 100%;
  height: auto;
  padding: 5% 10%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #333;
`

export const FormMsg = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  color: #eee;
  /* text-transform: capitalize; */
`
export const WrapperInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const InputEmail = styled.input`
  flex: 0 0 70%;
  height: 60px;
  border-radius: 0.6rem;
  background-color: rgba(255, 255, 255, 0.9);
  padding-left: 20px;
  color: #333;
  &:focus {
    outline: none;
    /* border: 2px solid rgba(0, 0, 0, 0.9); */
    border: 3px solid #378b2e;
  }
`

export const BtnSubscribe = styled.button`
  border: none;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  display: flex;
  align-items: center;
  padding: 0.3rem 0.6rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 0.6rem;
  cursor: pointer;
  &:hover {
    /* background-color: rgba(255, 255, 255, 0.7); */
    background-color: #378b2e;
    color: #eee;
    /* box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5); */
  }
`
