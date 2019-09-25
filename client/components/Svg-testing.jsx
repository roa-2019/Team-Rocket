<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./styles.css" type="text/css">
</head>

<body>
    <!-- cx and cy define the center co-ordinates of a thing-->
    <!-- rx and ry round the corners of a thing -->
    <!-- Set a border to the circle with the 'stroke' tag and also 'stroke-width' -->
    <!-- 'r' attribute defines the radius -->
    <!-- <svg width="100" height="100">
        <circle cx="100" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
    </svg>

    <svg>
        <rect cx='400' cy='200' rx='40' ry='40' width="300" height="100" style='box-shadow: 10 10 10px #000000 inset;fill:blue;'/>
    </svg>

    <svg height="140" width="500">
        <ellipse cx="200" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2" />
    </svg>

    <svg height='150' width='500'>
        <ellipse cx='240' cy='100' rx='220' ry='30' fill='red' />
        <ellipse cx='240' cy='80' rx='220' ry='30' fill='green' stroke="green" stroke-width="5" fill-opacity="0.0" />
        <circle cx="100" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
        <ellipse cx='240' cy='60' rx='220' ry='30' fill='yellow' stroke="yellow" stroke-width="5" fill-opacity="0.0" />
    </svg>

    <svg height='260' width='500'>
        <polygon points="220,10 300,210 170,250 123,234" fill='lime' stroke='purple' stroke-width='5' />
    </svg>

    <svg height="200" width="500">
        <polyline points="20,20 30,40, 90,60 20,20" style="fill:none;stroke:black;stroke-width:3" />
    </svg> -->

    <svg height='800' width='800' id="rocket-1">
        <!-- Wings! -->
        <!-- <g transform="translate(60,170) rotate(55 60 60)">
            <rect y='20' x='100' width='240' height='80' fill='grey' stroke='black' stroke-width='2' />
        </g> -->



        <!-- Wing styling -->


        <!-- Rocket nose 1 -->
        <ellipse cx="190" cy="140" rx="50" ry='130' stroke="black" stroke-width="1.5" fill="grey" />

        <!-- Rocket body 1 -->
        <rect width='100' height='300' fill='grey' stroke='black' stroke-width='1' ry='5' y='100' x='140' />
        <rect width='20' height='30' fill='aqua' y='170' x='180' stroke='black' stroke-width='1' ry='2' />
        <rect width='20' height='30' fill='aqua' y='240' x='180' stroke='black' stroke-width='1' ry='2' />
        <rect width='20' height='30' fill='aqua' y='310' x='180' stroke='black' stroke-width='1' ry='2' />

        <!-- Rocket bottom 1 -->
        <rect width='80' height='20' fill='grey' x='150' y='400' stroke='black' stroke-width='1' ry='1' />


        <polygon points="240,220 330,400 330,510 240,350" fill='grey' stroke='black' stroke-width='2' />
        <g>
            <polygon points="240,220 330,400 330,510 240,350" fill='grey' stroke='black' stroke-width='2' />
        </g>
    </svg>




    <!-- <svg>
        <polygon points=""  />
    </svg>

    <svg viewBox='-5 0 50 50' >

        <path fill='grey' stroke='black' stroke-width='.1' 
        d='
        M -1,10
        L 6,8
        L 6,30
        L 0,30
        Z
        ' />
    </svg>

    <svg viewBox='0 0 100 100'>
        <path fill='grey' stroke='black' stroke-width='.1' 
        d='
        M 10,0
        H 20
        V 20
        Z
        ' 
        />

    
    </svg> -->

</body>

</html>