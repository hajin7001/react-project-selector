import { forwardRef } from "react";

const Input = forwardRef(function Input({label, textarea, ...props}, ref){
  // description인 경우에는 textbox, 아닌 경우에는 
  return (
    <p>
      <label className="flex text-green-800 font-semibold mb-2 mt-3 text-lg">{label}</label>
      {textarea ? 
        <textarea {...props} ref={ref}></textarea> : 
        <input {...props} ref={ref}/>}
    </p>
  );
});

export default Input;