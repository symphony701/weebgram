import './style.css'
import { FormLogin } from '../form';
import { Button } from '../button';
export function Container(){
    return(
        <div className="container">
            <h1>Weebgram</h1>
            <h3>Sign In </h3>
            <FormLogin />
            <Button />
            
        </div>
    )
}