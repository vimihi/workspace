import React, { Component } from "react";
// import * as styles from './Login.module.scss';
import styles from "./Login.module.scss";
import LoginInput from "../../atoms/LoginInput/LoginInput";
import LoginLabel from "../../atoms/LoginLabel/LoginLabel";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      switch: true,
    };

    this.next = this.next.bind(this);
  }

  next() {
    (this.state.switch ? (
      this.setState(state => ({
        switch: false
      }))
    ) : 
    this.setState(state => ({
      switch: true
    }))
    )
  }

  render() {
    return (
      // <div className={"d-flex flex-row vim-panel"}>
      <section
        className={"container-fluid d-flex flex-column " + styles.vimLoginBox}
      >
        {/* <!-- TITLE --> */}
        <div className={"no-select " + styles.vimTitle}>Welcome</div>

        {this.state.switch ? (
          <>
            {/* <!-- SUB TITLE --> */}
            <LoginLabel label="Tell me your username" />

            {/* <!-- USERNAME --> */}
            <LoginInput placeholder="Username" name='username' />
          </>
        ) : (
          <>
            {/* <!-- SUB TITLE --> */}
            <LoginLabel label="What is the password?" />

            {/* <!-- Password --> */}
            <LoginInput placeholder="Password" name='password' />
          </>
        )}

        {/* <!-- TEXT ERROR --> */}
        <div className={"no-select " + styles.vimLbError}>
          Oops, it<span className={styles.vimTextSymbol}>'</span>s not existed
        </div>

        {/* <!-- NEXT BUTTON --> */}
        <button 
          className={"no-select " + styles.vimBtnNext}
          onClick={this.next}
        >Next</button>
      </section>
      // </div>
    );
  }
}



export default Login;
