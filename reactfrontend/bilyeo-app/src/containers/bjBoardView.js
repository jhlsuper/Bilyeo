import React from "react";
import axios from "axios";
import ReactTable from "react-table"; 
import 'react-table/react-table.css'
import Button from 'react-bootstrap/Button'

class bjBoardView extends React.Component {
    state = {
        bj_board: [],
      };
    
      componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/bj/").then((res) => {
          this.setState({
            bj_board: res.data,
          });
        });
      }
    
      render() {
        const columns = [{  
          Header: 'No.',  
          accessor: 'bj_id',
         }
         ,{  
          Header: 'Username',  
          accessor: 'user_id' ,
          }
         
         ,
         {
         Header: 'Title',  
         accessor: 'bj_title' ,
         
         }
         ,{  
          Header: 'Content',  
          accessor: 'bj_content' ,
          }
      ]
        return (
          <div className="boardView">
            <div className="button">
             <Button variant="dark" style={{height: 40, width:'100%'}}
             href="/bj/create" block>빌려줘 등록하기</Button>
             </div>
                  <ReactTable  
                  data={this.state.bj_board}  
                  columns={columns}  
                  />
          </div>
        );
    }
}

export default bjBoardView;


