var weight = [45, 67, 34, 56, 36]
function weightAvg(){
  var sum = weight[0] + weight[1] + weight[2]  + weight[3] + weight[4];
  var avg = sum/weight.length;
  console.log(avg);
}
function setup() 
{
  createCanvas(400,400);
  weightAvg();
}

function draw() 
{
background(51);

}

