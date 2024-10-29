import React, {useState, useEffect} from "react";
import './Editor.css'
import {
    AiOutlineBold,
    AiOutlineItalic,
    AiOutlineUnderline,
    AiOutlineAlignCenter,
    AiOutlineAlignLeft,
    AiOutlineAlignRight,
    AiOutlineRollback
    
} from "react-icons/ai"



const Editor = ()=>{
    //some useStates used to store the values of the properties. Chage as you please. The values in these states are default values. 

    const [text, setText] = useState("")
    const [bold, setBold] = useState(false)
    const [italian, setItalian] = useState(false)
    const [underline, setUnderline] = useState(false)
    const [font, setFont] = useState(16)
    const [align, setAlign] = useState("left")
    const [quotes, setQuotes] = useState(false)
    const [currCase, setCurrCase] = useState("capitalize")
    const [analysis, setAnalysis] = useState({})
    const [HTMLCODE, setHTMLCODE] = useState("")


    const Bold = ()=>{
        //this function is used to make the text bold
        setBold(!bold)
    }

    const Italian = () =>{
        //this function is used to make the text italic
        setItalian(!italian)
    }

    const Underline = () =>{
        //this function is used to make the text underlined
        setUnderline(!underline)
    }

    const changeFont = (operation)=>{
        //this function is used to increase or decrease the font by 1. operation == 1 means increase by 1 else decrease by 1
        if(operation == 1){
            setFont(font+1)
        }else{
            setFont(font-1)
        }
    }

    const changeAlign = (alignment) =>{
        //this function is used to change the alignment of the text in text area i.e either left, right or center
        setAlign(alignment)
    }

    const Quotes = ()=>{
        //this function is used to add double quotes to the text present in the text area
        setQuotes(!quotes)
       

    }

    const caseChange =  (c)=>{
        //this function is used to change the case of the text of the text present in text area i.e if c=='u' uppercase, if c=='l' lowercase
        //else capitalize
        setCurrCase(c)
        switch (c) {
            case 'u':
                setText(text.toUpperCase())
                break;
            case 'l':
                setText(text.toLowerCase())
                break;
            case 'c':
                setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())
                break;
            default:
                setText(text)
                break;
        }
    }

    const reset = () => {
        //set the values of all properties to default. 
              
        setBold(false)
        setItalian(false)
        setUnderline(false)
        setFont(16)
        setAlign("left")
        setQuotes(false)
        setCurrCase("capitalize")
       
    }

    const Analyse = ()=>{
        //this function should analyze the text present in the text area and generate the fllowing results an display that result in the analysis text area

        //the result object should contain follwing details

        { /*
        {
            no_of_letters,
            no_of_words,
            no_of_integers,
            no_of_spaces,
            no_of_specialsymbols,
            bold,
            italian,
            underline,
            quotes,
            currCase,
            align,
            font
        }
        */}

        // Contar letras (ignorando espacios y símbolos)
  const no_of_letters = text.replace(/[^a-zA-Z]/g, '').length;

  // Contar palabras (separadas por espacios)
  const no_of_words = text.split(/\s+/).filter(Boolean).length;

  // Contar enteros (números sin decimales)
  const no_of_integers = text.match(/\b\d+\b/g)?.length || 0;

  // Contar espacios
  const no_of_spaces = text.split(' ').length - 1;

  // Contar símbolos especiales (todo lo que no sea letra, número o espacio)
  const no_of_specialsymbols = text.replace(/[a-zA-Z0-9\s]/g, '').length;

  //const valores = Object.values(miObjeto);
//const resultadoObjeto = valores.join(', ');


        setAnalysis(
            {
            no_of_letters,
            no_of_words,
            no_of_integers,
            no_of_spaces,
            no_of_specialsymbols,
            bold,
            italian,
            underline,
            quotes,
            currCase,
            align,
            font

            }
        )

    }
   
    return(
        <div className="editorcomp">
            <div className="button">
                <button className="bold" onClick={Bold} placeholder="boldbtn">
                    <AiOutlineBold/>
                </button>

                <button className="italian" onClick={Italian} placeholder="italic">
                    <AiOutlineItalic/>
                </button>

                <button className="underline" onClick={Underline} placeholder="underline">
                    <AiOutlineUnderline/>
                </button>

                {/* create a button with className="size" and when clicked it should call changeFont() function used to increase the font. The display value
                    of this button should be "A+"
                
                */}
                <button className="size" onClick={(e)=>changeFont(1)} placeholder="size">A+</button>

                {/* create a button with className size and when clicked it should call changeFont() function used to decrease the font. The display value
                    of this button should be "A-"
                */}
                <button className="size" onClick={(e)=>changeFont(-1)} placeholder="size">A-</button>

                <button className="align" onClick={(e)=>changeAlign("left")}>
                    <AiOutlineAlignLeft/>
                </button>
                <button className="align" placeholder="align" onClick={(e)=>changeAlign("center")}>
                    <AiOutlineAlignCenter/>
                </button>
                <button className="align" onClick={(e)=>changeAlign("right")}>
                    <AiOutlineAlignRight/>
                </button>
                <button onClick={Quotes} className="quotes">
                    &#34;
                </button>
                <button className="caseChange" onClick={(e)=>caseChange("u")}>
                    UC
                </button>
                <button className="caseChange" onClick={(e)=>caseChange("l")}>
                    LC
                </button>
                <button className="caseChange" onClick={(e)=>caseChange("c")}>
                    C
                </button>
                <button className="Empty" onClick={reset}>
                    <AiOutlineRollback/>
                </button>

                {/*create a button with className "analyse" and when clicked it should call Analyse() function used to analyse the text in text area. the display value
                of this button should be "Analyse"
                */}

                <button className="analyse" onClick={Analyse}>Analyse</button>


            </div>

            <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="type Something..."
            onChange={(e)=>setText(e.target.value)}
            value={quotes ? `"${text}"` : text}
            style={{
                fontWeight: bold ? 'bold' : 'normal', 
                fontStyle: italian ? 'italic' : 'normal',
                textDecoration: underline ? 'underline' : 'none',
                textAlign: align,
                fontSize: font
                
            }}
            ></textarea>
            
            {/*
            {create a textArea with placeholder= "ANALYSIS", type diabled, className="analysis", and its should display the object result generated by the result  generated by the
                the Aalyse function
            }
            */}
            <textarea
             placeholder= "ANALYSIS"
            className="analysis"
            disabled
            cols="30"
            rows="10"
            value={JSON.stringify(analysis, null, 2)}
            onClick={Analyse}
             ></textarea>
        </div>
    )
}

export default Editor;