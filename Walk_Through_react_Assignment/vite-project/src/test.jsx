function handleClick(){
    console.log("Click me button is cliked..........");
  }


function Test({text}){
   return  (
    <>
    <h2>Problem statement:- 2</h2>
       {/* Attach the handleClick function to the onClick event of the button */}
       {/** the onClick event handler is attached directly to the <button> element. When the button is clicked, the handleClick function will be called. */}
    <button onClick={handleClick}>{text}</button>
    </>
    )
}
export default Test