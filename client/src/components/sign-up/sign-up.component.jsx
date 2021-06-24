import { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confrimPassword: ''
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    
    const {displayName, email, password, confrimPassword } = this.state
    if(password !== confrimPassword) {
      alert("Passwords doesn't match");
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, {displayName})
      this.setState({
        displayName: '', 
        email: '', 
        password: '', 
        confrimPassword: ''
      })
      console.log(user)
    } catch(error) {
      console.log(error)
    }

    
  }

  render() {
    return (
      <div className='sign-up'>
        <h2 className='title'>I don't have an account.</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit} autoComplete='false'>
          <FormInput 
            name='displayName' 
            type='text' 
            value={this.state.displayName} 
            handleChange={this.handleChange}
            label='Display Name'
          />
          <FormInput 
            name='email' 
            type='email' 
            value={this.state.email} 
            handleChange={this.handleChange}
            label='Email'
          />

          <FormInput 
            name='password' 
            type='password' 
            value={this.state.password} 
            handleChange={this.handleChange}
            label='Password'
          />
          <FormInput 
            name='confrimPassword' 
            type='password' 
            value={this.state.confrimPassword} 
            handleChange={this.handleChange}
            label='Confrim Password'
          />
          <div className='buttons'>
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
          
        </form>
      </div>
    )
  }
}

export default SignUp;