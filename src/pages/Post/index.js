import React, { useMemo } from "react";
import {
  useParams,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

// export default function Post() {
//   const params = useParams();
//   const { search } = useLocation();
//   const queryParams = useMemo(() => new URLSearchParams(search), [search]);

//   return <h1>E aí?</h1>;
// }

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    const { search } = this.props.location;
    this.queryParams = new URLSearchParams(search);
  }
  render() {
    console.log(this.props.match.params);
    console.log(this.props.location.search);

    return (
      <>
        <h1>Post Page</h1>
      </>
    );
  }
}
