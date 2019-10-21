import React, { Component } from "react";
// import * as styles from './Login.module.scss';
import "./styles.scss";
import SubInput from "../../atoms/SubInput/SubInput";

class Login extends Component {
  render() {
    return (
      // <div className={"d-flex flex-row vim-panel"}>
        <section className="container-fluid d-flex flex-column vim-login-box">
          {/* <!-- TITLE --> */}
          <div className="no-select vim-title">Welcome</div>

          {/* <!-- SUB TITLE --> */}
          <div className="no-select vim-lb-username">Tell me your username</div>

          {/* <!-- USERNAME --> */}
          <SubInput placeholder = "Username" />

          {/* <!-- TEXT ERROR --> */}
          <div className="no-select vim-lb-error">
            Oops, it<span className="vim-text-symbol">'</span>s not existed
          </div>

          {/* <!-- NEXT BUTTON --> */}
          <button className="no-select vim-btn-next">Next</button>
        </section>
      // </div>
    );
  }
}

export default Login;
