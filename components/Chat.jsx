/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const Chat = () => {

    const [chathistory, setChathistory] = useState([])

    const updateHistroy = (data) => {
        setChathistory(data)
    }


    return ( 
            <Box
            >
                <Box>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                height: "87vh",
                                padding: "0px",
                            }}
                        >
                            <div
                                style={{
                                    margin: "1.3rem",
                                    justifyContent: "flex-start",
                                    padding: "0px",
                                }}
                            >
                                {chathistory?.map((chat) => {
                                    return (
                                        <>
                                            {chat.type == "backend" ?
                                                <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 10 }}>
                                                    <div style={{ backgroundColor: '#80808096', maxWidth: '400px', padding: 14, borderRadius: 14, color: 'black' }}>
                                                        {chat?.data?.response}
                                                    </div>
                                                </div>
                                                :
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
                                                    <div style={{ backgroundColor: "#E6E6FA", maxWidth: '400px', padding: 14, borderRadius: 14, color: 'black' }}>
                                                        {chat?.data}9c27b0d9
                                                    </div>
                                                </div>
                                            }
                                        </>
                                    )
                                })}
                            </div >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: "auto",
                                }}
                            >
                                <Button
                                    color="secondary"
                                    size="small"
                                    sx={{ ml: 1, mr: 1, my: 1 }}
                                    style={{
                                        color: "#000000",
                                        borderColor: "#757575",
                                    }}
                                    variant="outlined"
                                >
                                    Summarize
                                </Button>
                                <Button
                                    color="secondary"
                                    size="small"
                                    sx={{ mx: 1, my: 1 }}
                                    style={{
                                        color: "#000000",
                                        borderColor: "#757575",
                                    }}
                                    variant="outlined"
                                >
                                    Explain
                                </Button>
                                <Button
                                    color="secondary"
                                    size="small"
                                    sx={{ mx: 1, my: 1 }}
                                    style={{
                                        color: "#000000",
                                        borderColor: "#757575",
                                    }}
                                    variant="outlined"
                                >
                                    Examples
                                </Button>
                                <Button
                                    color="secondary"
                                    size="small"
                                    sx={{ mx: 1, my: 1 }}
                                    style={{
                                        color: "#000000",
                                        borderColor: "#757575",
                                    }}
                                    variant="outlined"
                                >
                                    Questions
                                </Button>
                            </div>
                            <div>
                                {/* <TextField
                                    // className={removeUpDownArrow}
                                    style={{
                                        color: "#000000",
                                        borderColor: "#757575",
                                    }}
                                    fullWidth
                                    id="outlined-multiline-flexible"
                                    placeholder="Ask anything about the document!"
                                    multiline
                                    maxRows={1}
                                /> */}
                                <AskQuestion
                                    chathistory={chathistory} 
                                    updateHistroy={updateHistroy} 
                                />
                            </div>
                        </div>
                    </Box>
            </Box>
     );
}
 
export default Chat;


const AskQuestion = (props) => {
    console.log("this are props", props)
    const { chathistory, updateHistroy } = props;
    console.log({ chathistory, updateHistroy })
    const [question, setQuestion] = useState("")
    console.log(chathistory)
    const handleSubmit = async () => {
        const data = await axios.get(`http://localhost:8000/query?query_string=${question}`)
        console.log(data);
        const chatHistoryData = chathistory.length > 0 ? [...chathistory] : [];

        chatHistoryData.push(
            {
                data: question,
                type: "user"
            },
            {
                data: data?.data,
                type: "backend"
            }
        );
        console.log(chatHistoryData)
        updateHistroy(chatHistoryData)
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>

            <textarea
                id="message"
                name="message"
                value={question}
                cols={80}
                onChange={event => {
                    // 👇️ access textarea value
                    setQuestion(event.target.value);
                    // console.log(event.target.value);
                }}
            // style={{
            //     border: isFocused ? 'none' : '1px solid #ccc',
            //     outline: 'none',
            //     boxShadow: isFocused ? '0 0 5px 0 blue' : 'none',
            // }}
            />
            {/* <OutlinedInput
                fullWidth
                sx={{ mx: 1, my: 1 }}
                placeholder="Ask anything about the document!"
                id="component-outlined"
                multiline
                inputRef={inputRef}
                value={question}
                onChange={(e) => {
                    console.log(e.target.innerText)
                    setQuestion(...question, e.target.value)
                }}
            /> */}
            <Button variant='contained' onClick={handleSubmit}>
                Ask
            </Button>

        </div>
    )
}

