export default function spliceString(string,length,startPos,ellips) {
	if(string){
		string = string.toString()
		startPos = startPos || 0
		length = length || 1
		let res = string.substr(startPos,length)
		if(ellips){
			res+='...'
		 
		}
		return res
	}
	
}
