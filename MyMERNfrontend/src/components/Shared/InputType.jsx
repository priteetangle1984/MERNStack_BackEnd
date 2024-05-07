export default function InputType({labelfor, labeltext, inputType, value, onChange, type, className, name}) {
  return (
    <>
      <div className="form-group">
              <label htmlFor={labelfor}>{labeltext}</label>
              <input
                type={inputType}
                className={className}
                name={name}
                value={value}
                onChange={onChange}
                />
            </div>
    </>
  )
}
