import React, { PureComponent } from "react"
import firebase from "../../../../firebase/firebase"
import "../update_user_data/style.css"
import InlineEdit from "react-edit-inline2"
import swal from "sweetalert"

export class UpdateUserData extends PureComponent {
  constructor() {
    super()
    this.state = {
      Word_Dictionary: [],
      updateWord: "",
      isLoading: true
    }
    this.dataChanged = this.dataChanged.bind(this)
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref("Word_Dictionary");
    itemsRef.on('value', (snapshot) => {
      debugger
      let items = snapshot.val();
      this.setState({
        Word_Dictionary: items,
        isLoading: false
      })
    });

this.setState({isLoading: false})

  }

  async dataChanged(data) {
    debugger
    const itemRef = firebase.database().ref("Word_Dictionary");

    this.setState({
      updateWord: data
    })

    console.log(data)

    await itemRef.update(data)
    swal({
      title: "Done!",
      text: "Word is Updated",
      icon: "success",
      timer: 2000,
      button: false
    })
    console.log(data)
    this.setState({ ...data })
  }

  render() {
    const { isLoading } = this.state
    return (
      <div className="">
        <div>
<p>{isLoading}</p>
          <table>
            <tr>
              <th>Dictionary Words</th>
            </tr>
            {Object.keys(this.state.Word_Dictionary).map((item) => {
              return (
                <tr>
                  {isLoading ? <h1>Loading...</h1> : 
                  <td key={this.state.Word_Dictionary[item]}>
                    <InlineEdit
                      activeClassName="editing"
                      text={this.state.Word_Dictionary[item]}
                      paramName={item}
                      change={this.dataChanged}
                      style={{
                        backgroundColor: 'none',
                        minWidth: 150,
                        display: 'inline-block',
                        margin: 0,
                        padding: 0,
                        fontSize: 15,
                        outline: 0,
                        border: 0
                      }}
                    />
                  </td>
            }
                </tr>
              )
            })}
          </table>
        </div>

      </div>
    )
  }
}

export default UpdateUserData
