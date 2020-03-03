const theme = { theme : window.localStorage.getItem('theme')||'white'};
const toggleTheme = (state = theme , action)=>{
    switch (action.type){
        case "Toggle_theme" : {
            if(state.theme==="white"){
                window.localStorage.setItem('theme',"dark");
                return {theme : "dark"}
            }else if(state.theme==="dark"){
                window.localStorage.setItem('theme',"white");
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