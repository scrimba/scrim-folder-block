import { FolderBlockProps } from "@githubnext/blocks";
import "./index.css";
let scrims = []
let isScrim = /\.scrim$/i

const urlFromJson = function(json) {
    let url = "https://scrimba.com"
    if (json.course) {
      url += `/learn/${json.course}/`
      url += json.blurb ? `${json.blurb}-${json.id}` : `${json.id}`
    } else {
      url += `/scrim/${json.id}`
    }
    url += "?embed=blocks,mini-header"
    return url;
}

export default function ({tree, context, onRequestGitHubData}: FolderBlockProps) {
	scrims = tree.filter( (item) => {
		return isScrim.test(item.path) ? true : false
	})
	
	return (
		<>
			<h1>Scrims in folder</h1>
			{scrims.map((item) => (
      		  <li>{item.path}</li>
      		))}
		</>
	);
}
