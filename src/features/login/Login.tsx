import background from "./../../img/bg-01.jpg";
import "./../../App.css";

export function Login() {
  return (
    <div className="Login">
      <div
        className="App-login"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="Wrap p-t-30 p-b-50">
          <span className="Form-title p-b-41">Account Login</span>
          <form className="Form p-b-33 p-t-5">
            <div className="Wrap-input">
              <input
                className="Input"
                type="text"
                name="username"
                placeholder="User name"
              ></input>
              <span className="Focus-input"></span>
            </div>
            <div className="Wrap-input">
              <input
                className="Input"
                type="password"
                name="pass"
                placeholder="Password"
              ></input>
              <span className="Focus-input"></span>
            </div>
            <div className="App-login-form-btn">
              <button
                className="Form-btn"
                onClick={() => {
                  console.log("Button Clicked");
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    // <div>
    //   <div className={styles.row}>
    //     <button
    //       className={styles.button}
    //       aria-label="Decrement value"
    //       onClick={() => dispatch(decrement())}
    //     >
    //       -
    //     </button>
    //     <span className={styles.value}>{count}</span>
    //     <button
    //       className={styles.button}
    //       aria-label="Increment value"
    //       onClick={() => dispatch(increment())}
    //     >
    //       +
    //     </button>
    //   </div>
    //   <div className={styles.row}>
    //     <input
    //       className={styles.textbox}
    //       aria-label="Set increment amount"
    //       value={incrementAmount}
    //       onChange={(e) => setIncrementAmount(e.target.value)}
    //     />
    //     <button
    //       className={styles.button}
    //       onClick={() => dispatch(incrementByAmount(incrementValue))}
    //     >
    //       Add Amount
    //     </button>
    //     <button
    //       className={styles.asyncButton}
    //       onClick={() => dispatch(incrementAsync(incrementValue))}
    //     >
    //       Add Async
    //     </button>
    //     <button
    //       className={styles.button}
    //       onClick={() => dispatch(incrementIfOdd(incrementValue))}
    //     >
    //       Add If Odd
    //     </button>
    //   </div>
    // </div>
  );
}
