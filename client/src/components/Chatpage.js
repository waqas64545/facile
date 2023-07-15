import React,{useEffect} from 'react'



function Chatpage() {
    const toggleDropdown1 = () => {
      document.getElementById("Dropdown1").classList.toggle("show");
    };
  
    const toggleDropdown2 = () => {
      document.getElementById("Dropdown2").classList.toggle("show");
    };
  
    const handleClickOutside = (event) => {
      if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    };
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
  return (
    <>
    <style>
        {`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            .chatpage {
                display: flex;
            }
            
            .left-section {
                width: 7%;
                height: 100vh;
                background-color: #ff9E4F;
                display: flex;
                flex-direction: column;
                /* justify-content: space-between; */
                text-align: center;
                padding: 10px;
                color:white;
            }
            .workspace{
                margin-top: 10px;
                font-weight: bold;
                font-size: 14px;
                margin-bottom: 20px;
            }
            
            /* Boxes and logout button in the left section */
            .box {
                text-align: center;
                width: 80%;
                margin-left: 10px;
                height: 100px;
                background-color: #ccc6c6;
                margin-bottom: 20px;
                padding: 20px;
            }
            .box a img{
                padding-top: 2px;
                text-align: center;
                height: 25px;
                width: 25px;
            }
            .left-section button{
                border: none;
            }
            .plus img{
                width: 10px;
                height: 10px;
            }
            
            
            
            
            
            /* .logout-button {
                /* padding: 7px; */
                /* background-color: rgb(240, 239, 239); 
            } */
            
            .adduser img{
                width: 25px;
                height: 25px;
                cursor:pointer;
            }
            
            .logout-button{
                justify-content: flex-end;
                margin-top: 27rem;
            }
            .logout-button img{
                width: 30px;
                height: 30px;
                cursor: pointer;
            }
            
            /* Middle section with 25% width */
            .middle-section {
                width: 23%;
                height: 100vh;
                background-color: #f2f2f2;
                padding: 10px;
                border: 1px solid black;
                display: flex;
                flex-direction: column;
            }
            
            .username{
                display: flex;
            }
            .username .button{
                width: 25px;
                border: none;
                margin: 10px;
            }
            
            .plus{
                padding: 2px;
                margin-left: 20px;
            }
            
            
            .channels .direct {
                margin: 10px;
                // display: flex;
            }
            
            .dropbtn {
                /* background-color: #3498DB; */
                color: black;
                padding: 16px;
                font-size: 16px;
                border: none;
                cursor: pointer;
            }
            .a img{
                width:25px;
                height:25px;
                padding: 2px;
                margin-left: 20px;
            }
            
            
            /* Dropdown button on hover & focus */
            /* .dropbtn:hover, .dropbtn:focus {
                background-color: #2980B9;
              } */
            
            /* The container <div> - needed to position the dropdown content */
            .dropdown {
                position: relative;
                display: inline-block;
                margin-bottom: 180px;
            }
            
            /* Dropdown Content (Hidden by Default) */
            .dropdown-content {
                display: none;
                position: absolute;
                background-color: #f1f1f1;
                min-width: 160px;
                box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                z-index: 1;
            }
            
            /* Links inside the dropdown */
            .dropdown-content a {
                color: black;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
            }
            
            /* Change color of dropdown links on hover */
            .dropdown-content a:hover {
                background-color: #ddd;
            }
            
            /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
            .show {
                display: block;
            }
            
            .dropdown-button {
                margin-top: 10px;
                padding: 5px 10px;
                background-color: lightgray;
                cursor: pointer;
            }
            
            
            /* Right section with 70% width */
            .right-section {
                width: 70%;
                height: 100vh;
                /* background-color: #f2f2f2; */
                /* padding: 10px; */
            }
            
            .chat-section {
                height: 100%;
                display: flex;
                flex-direction: column;
              }
              
              .navbar {
                display: flex;
                align-items: center;
                padding: 10px;
                background-color: #2980B9;
              }
              
              .username {
                font-weight: bold;
                margin-right: auto;
                color:white;
              }
              
              .search-bar {
                display: flex;
                align-items: center;
                margin-right: 10px;
              }
              .search-button img{
                width: 25px;
                paddingTop: 2px;
                // background-color: #2980B9;
                font-size: 22px;
                // border: none;
                outline: none;
                cursor: pointer;

              }
              
              .search-bar input[type="text"] {
                padding: 5px;
              }
              
              .search-button {
                // padding: 6px;
                background-color: #f3f0f0;
                border: none;
                outline: none;
                cursor: pointer;
              }
              
              .settings-button img{
                // padding: 7px;
                width: 22px;
                background-color: none;
                background: none;
                border: none;
                outline: none;
                cursor: pointer;
                font-size:20px;
              }
              
              
              .messages {
                flex-grow: 1;
                overflow-y: scroll;
                padding: 10px;
                background-color: #f9f9f9;
              }
              
              .message-input {
                display: flex;
                align-items: center;
                padding: 10px;
                backgroundColor: #20980B9;
              }
              
              .message-input input[type="text"] {
                flex-grow: 1;
                padding: 5px;
              }
              
              .send-button img{

                width: 25px;
                paddingTop: 2px;
                // background-color: #2980B9;
                font-size: 22px;
                // border: none;
                outline: none;
                cursor: pointer;
              }
              
              .action-bar {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 7px;
                background-color: #f2f2f2;
              }
              
              .action-bar button {
                width: 25px;
                padding: 5px;
                border: none;
                font-size: 20px;
                background-color: none;
                border: none;
                outline: none;
                cursor: pointer;
                margin-right: 20px;
              }
            
              .action-bar button i{
                border: none;
                background: none;
              }           
        `}
    </style>
    <div className="chatpage">
        <div className="left-section">
          <div className="workspace">Workspace</div>
          <div className="box" style={{ backgroundColor: "black" }}><a href=""></a></div>
          <div className="adduser">
            <a><img src="" alt="adduser" /></a>
          </div>
          <div>
            <button className="logout-button"><img src="" alt="" /></button>
          </div>
        </div>

        <div className="middle-section">
          <div className="username1">
            <div className="user">
              <h1>Username</h1>
            </div>
            <div className="button"><button onClick={toggleDropdown1}>&#9660;</button></div>
          </div>
          <hr />
          <div className="dropdown">
            <div className="channels">
              <button className="dropbtn" onClick={toggleDropdown1}>&#9660;</button>
              <strong>Channels</strong>
              <a className='a'><img src="" alt="" /></a>
            </div>
            <div id="Dropdown1" className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <div className="dropdown">
            <div className="channels">
              <button className="dropbtn" onClick={toggleDropdown2}>&#9660;</button>
              <div className='direct'><strong>Direct Messages</strong></div>
              <a className='a'><img src="" alt="" /></a>
            </div>
            <div id="Dropdown2" className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="chat-section">
            <div className="navbar">
              <div className="username">John Doe</div>
              <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <div className='search'>
                <button className="search-button"><img src="" alt="" /></button>
                </div>
              </div>
              <a className= 'settings-button'><img src="" alt="" /></a>
            </div>
            <div className="messages">
              {/* Chat messages go here */}
            </div>
            <div className="message-input">
              <input type="text" placeholder="Type your message..." />
              <a className='send-button'><img src="" alt="" /></a>
            </div>
            <div className="action-bar">
              <button><i className="fas fa-file"></i></button>
              <button><i className="fas fa-video"></i></button>
              <button><i className="fas fa-microphone"></i></button>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}


export default Chatpage;