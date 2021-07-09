export class AuthService {
    
    isLoggedIn = false;

    isAuthenticated(){
        const promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(this.isLoggedIn)
            }, 800)
        },
        );
        return promise;

    }
    
    login() {
        if(!this.isLoggedIn){
            this.isLoggedIn = true;
            console.log("User logged in!");
        } else {
            console.log("User already logged in!");
        }
    }

    logout(){
        if(this.isLoggedIn) {
            this.isLoggedIn = false;
            console.log("User logged out!");
        } else {
            console.log("User already logged out!");
        }
    }
}