import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
    textField: {
        width: '20%',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,

        "& .MuiFormLabel-root.Mui-focused":{
          color: "black"
        },

        "& .MuiFormHelperText-root.Mui-error":{
          color:"maroon"
        },

        "& .MuiFormLabel-root.Mui-error":{
          color:"black"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "rgb(103 187 107)",

            borderBottom:"3px solid",
          },
          "& .MuiInput-underline:before":{
              borderColor:"black"
          },
          "& .MuiInput-underline:hover:before":{
              borderBottom:"1px solid"
          },
        
    },

    form:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },

    diaLoading:{
      backdropFilter:"blur(1px)",
    },

    link:{
      textDecoration:"none"
    },

    mainRoot:{
      height:"100%",
      display:"grid",
      alignContent:"center",
      background:"linear-gradient(180deg, #000000d1, rgb(245 0 87 / 4%));"
    },

    text:{
      textAlign:"center",
    }

}));
