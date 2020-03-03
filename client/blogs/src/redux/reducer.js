const theme = { theme : window.localStorage.getItem('theme')||'white'};
const toggleTheme = (state = theme , action)=>{
    switch (action.type){
        case "Toggle_theme" : {
            if(state.theme==="white"){
                return {theme : "dark"}
            }else if(state.theme==="dark"){
                return {theme : "white"}
            }else{
                return state
            }
        }
        default : return state
    }
}

const ToggleTheme = toggleTheme;

export default ToggleTheme;