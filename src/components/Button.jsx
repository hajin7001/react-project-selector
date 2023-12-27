export default function Button({children, ...props}){
  // div에 className 달아주기 
  return(
    <div {...props}>
      <button>{children}</button>
    </div>
  );
}