export const Input = ({ types, placeholders, values, classe, children}) => {
  return(
    <>
      <input type={types} placeholder={placeholders} defaultValue={values} className={classe} />
      {children}
    </>
  )
}