import { Component } from "react";
import "./directory.style.scss";
import MenuItem from '../menu-item/menu-item.component';
import Sections from './sections.data'

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: Sections
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({id, ...othersSectionProps}) => (
            <MenuItem key={id} {...othersSectionProps} />
          ))
        }
      </div>
    )
  }
}

export default Directory;