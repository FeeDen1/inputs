const [line1,line2,line3] = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split('\n')
    .map(s => s.trim().split(/\s+/).map(Number))

const time = line1[1]

const floorOfLeaver = line2[line3[0] - 1]


const fromTheStart = floorOfLeaver - line2[0]


const fromTheEnd = line2[line2.length - 1] - floorOfLeaver


if(fromTheStart <= time || fromTheEnd <= time){
    result = line2[line2.length - 1] - line2[0]


} else {
    result = Math.min(fromTheEnd, fromTheStart) + fromTheEnd + fromTheStart


}

process.stdout.write(result.toString())