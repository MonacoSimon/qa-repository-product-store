/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 185.0, "minX": 0.0, "maxY": 1282.0, "series": [{"data": [[0.0, 185.0], [0.1, 185.0], [0.2, 185.0], [0.3, 185.0], [0.4, 185.0], [0.5, 186.0], [0.6, 186.0], [0.7, 186.0], [0.8, 186.0], [0.9, 186.0], [1.0, 187.0], [1.1, 187.0], [1.2, 187.0], [1.3, 187.0], [1.4, 187.0], [1.5, 191.0], [1.6, 191.0], [1.7, 191.0], [1.8, 191.0], [1.9, 191.0], [2.0, 193.0], [2.1, 193.0], [2.2, 193.0], [2.3, 193.0], [2.4, 193.0], [2.5, 193.0], [2.6, 193.0], [2.7, 193.0], [2.8, 193.0], [2.9, 193.0], [3.0, 193.0], [3.1, 193.0], [3.2, 193.0], [3.3, 193.0], [3.4, 193.0], [3.5, 194.0], [3.6, 194.0], [3.7, 194.0], [3.8, 194.0], [3.9, 194.0], [4.0, 194.0], [4.1, 194.0], [4.2, 194.0], [4.3, 194.0], [4.4, 194.0], [4.5, 194.0], [4.6, 194.0], [4.7, 194.0], [4.8, 194.0], [4.9, 194.0], [5.0, 194.0], [5.1, 194.0], [5.2, 194.0], [5.3, 194.0], [5.4, 194.0], [5.5, 194.0], [5.6, 194.0], [5.7, 194.0], [5.8, 194.0], [5.9, 194.0], [6.0, 195.0], [6.1, 195.0], [6.2, 195.0], [6.3, 195.0], [6.4, 195.0], [6.5, 196.0], [6.6, 196.0], [6.7, 196.0], [6.8, 196.0], [6.9, 196.0], [7.0, 196.0], [7.1, 196.0], [7.2, 196.0], [7.3, 196.0], [7.4, 196.0], [7.5, 197.0], [7.6, 197.0], [7.7, 197.0], [7.8, 197.0], [7.9, 197.0], [8.0, 197.0], [8.1, 197.0], [8.2, 197.0], [8.3, 197.0], [8.4, 197.0], [8.5, 198.0], [8.6, 198.0], [8.7, 198.0], [8.8, 198.0], [8.9, 198.0], [9.0, 199.0], [9.1, 199.0], [9.2, 199.0], [9.3, 199.0], [9.4, 199.0], [9.5, 200.0], [9.6, 200.0], [9.7, 200.0], [9.8, 200.0], [9.9, 200.0], [10.0, 202.0], [10.1, 202.0], [10.2, 202.0], [10.3, 202.0], [10.4, 202.0], [10.5, 203.0], [10.6, 203.0], [10.7, 203.0], [10.8, 203.0], [10.9, 203.0], [11.0, 203.0], [11.1, 203.0], [11.2, 203.0], [11.3, 203.0], [11.4, 203.0], [11.5, 205.0], [11.6, 205.0], [11.7, 205.0], [11.8, 205.0], [11.9, 205.0], [12.0, 207.0], [12.1, 207.0], [12.2, 207.0], [12.3, 207.0], [12.4, 207.0], [12.5, 210.0], [12.6, 210.0], [12.7, 210.0], [12.8, 210.0], [12.9, 210.0], [13.0, 219.0], [13.1, 219.0], [13.2, 219.0], [13.3, 219.0], [13.4, 219.0], [13.5, 220.0], [13.6, 220.0], [13.7, 220.0], [13.8, 220.0], [13.9, 220.0], [14.0, 225.0], [14.1, 225.0], [14.2, 225.0], [14.3, 225.0], [14.4, 225.0], [14.5, 227.0], [14.6, 227.0], [14.7, 227.0], [14.8, 227.0], [14.9, 227.0], [15.0, 227.0], [15.1, 227.0], [15.2, 227.0], [15.3, 227.0], [15.4, 227.0], [15.5, 227.0], [15.6, 227.0], [15.7, 227.0], [15.8, 227.0], [15.9, 227.0], [16.0, 229.0], [16.1, 229.0], [16.2, 229.0], [16.3, 229.0], [16.4, 229.0], [16.5, 230.0], [16.6, 230.0], [16.7, 230.0], [16.8, 230.0], [16.9, 230.0], [17.0, 230.0], [17.1, 230.0], [17.2, 230.0], [17.3, 230.0], [17.4, 230.0], [17.5, 230.0], [17.6, 230.0], [17.7, 230.0], [17.8, 230.0], [17.9, 230.0], [18.0, 230.0], [18.1, 230.0], [18.2, 230.0], [18.3, 230.0], [18.4, 230.0], [18.5, 231.0], [18.6, 231.0], [18.7, 231.0], [18.8, 231.0], [18.9, 231.0], [19.0, 231.0], [19.1, 231.0], [19.2, 231.0], [19.3, 231.0], [19.4, 231.0], [19.5, 233.0], [19.6, 233.0], [19.7, 233.0], [19.8, 233.0], [19.9, 233.0], [20.0, 233.0], [20.1, 233.0], [20.2, 233.0], [20.3, 233.0], [20.4, 233.0], [20.5, 234.0], [20.6, 234.0], [20.7, 234.0], [20.8, 234.0], [20.9, 234.0], [21.0, 234.0], [21.1, 234.0], [21.2, 234.0], [21.3, 234.0], [21.4, 234.0], [21.5, 235.0], [21.6, 235.0], [21.7, 235.0], [21.8, 235.0], [21.9, 235.0], [22.0, 236.0], [22.1, 236.0], [22.2, 236.0], [22.3, 236.0], [22.4, 236.0], [22.5, 236.0], [22.6, 236.0], [22.7, 236.0], [22.8, 236.0], [22.9, 236.0], [23.0, 236.0], [23.1, 236.0], [23.2, 236.0], [23.3, 236.0], [23.4, 236.0], [23.5, 237.0], [23.6, 237.0], [23.7, 237.0], [23.8, 237.0], [23.9, 237.0], [24.0, 238.0], [24.1, 238.0], [24.2, 238.0], [24.3, 238.0], [24.4, 238.0], [24.5, 239.0], [24.6, 239.0], [24.7, 239.0], [24.8, 239.0], [24.9, 239.0], [25.0, 239.0], [25.1, 239.0], [25.2, 239.0], [25.3, 239.0], [25.4, 239.0], [25.5, 240.0], [25.6, 240.0], [25.7, 240.0], [25.8, 240.0], [25.9, 240.0], [26.0, 240.0], [26.1, 240.0], [26.2, 240.0], [26.3, 240.0], [26.4, 240.0], [26.5, 240.0], [26.6, 240.0], [26.7, 240.0], [26.8, 240.0], [26.9, 240.0], [27.0, 241.0], [27.1, 241.0], [27.2, 241.0], [27.3, 241.0], [27.4, 241.0], [27.5, 241.0], [27.6, 241.0], [27.7, 241.0], [27.8, 241.0], [27.9, 241.0], [28.0, 243.0], [28.1, 243.0], [28.2, 243.0], [28.3, 243.0], [28.4, 243.0], [28.5, 244.0], [28.6, 244.0], [28.7, 244.0], [28.8, 244.0], [28.9, 244.0], [29.0, 244.0], [29.1, 244.0], [29.2, 244.0], [29.3, 244.0], [29.4, 244.0], [29.5, 244.0], [29.6, 244.0], [29.7, 244.0], [29.8, 244.0], [29.9, 244.0], [30.0, 244.0], [30.1, 244.0], [30.2, 244.0], [30.3, 244.0], [30.4, 244.0], [30.5, 244.0], [30.6, 244.0], [30.7, 244.0], [30.8, 244.0], [30.9, 244.0], [31.0, 245.0], [31.1, 245.0], [31.2, 245.0], [31.3, 245.0], [31.4, 245.0], [31.5, 246.0], [31.6, 246.0], [31.7, 246.0], [31.8, 246.0], [31.9, 246.0], [32.0, 246.0], [32.1, 246.0], [32.2, 246.0], [32.3, 246.0], [32.4, 246.0], [32.5, 246.0], [32.6, 246.0], [32.7, 246.0], [32.8, 246.0], [32.9, 246.0], [33.0, 246.0], [33.1, 246.0], [33.2, 246.0], [33.3, 246.0], [33.4, 246.0], [33.5, 246.0], [33.6, 246.0], [33.7, 246.0], [33.8, 246.0], [33.9, 246.0], [34.0, 246.0], [34.1, 246.0], [34.2, 246.0], [34.3, 246.0], [34.4, 246.0], [34.5, 247.0], [34.6, 247.0], [34.7, 247.0], [34.8, 247.0], [34.9, 247.0], [35.0, 247.0], [35.1, 247.0], [35.2, 247.0], [35.3, 247.0], [35.4, 247.0], [35.5, 248.0], [35.6, 248.0], [35.7, 248.0], [35.8, 248.0], [35.9, 248.0], [36.0, 249.0], [36.1, 249.0], [36.2, 249.0], [36.3, 249.0], [36.4, 249.0], [36.5, 249.0], [36.6, 249.0], [36.7, 249.0], [36.8, 249.0], [36.9, 249.0], [37.0, 250.0], [37.1, 250.0], [37.2, 250.0], [37.3, 250.0], [37.4, 250.0], [37.5, 250.0], [37.6, 250.0], [37.7, 250.0], [37.8, 250.0], [37.9, 250.0], [38.0, 251.0], [38.1, 251.0], [38.2, 251.0], [38.3, 251.0], [38.4, 251.0], [38.5, 252.0], [38.6, 252.0], [38.7, 252.0], [38.8, 252.0], [38.9, 252.0], [39.0, 253.0], [39.1, 253.0], [39.2, 253.0], [39.3, 253.0], [39.4, 253.0], [39.5, 256.0], [39.6, 256.0], [39.7, 256.0], [39.8, 256.0], [39.9, 256.0], [40.0, 256.0], [40.1, 256.0], [40.2, 256.0], [40.3, 256.0], [40.4, 256.0], [40.5, 257.0], [40.6, 257.0], [40.7, 257.0], [40.8, 257.0], [40.9, 257.0], [41.0, 262.0], [41.1, 262.0], [41.2, 262.0], [41.3, 262.0], [41.4, 262.0], [41.5, 268.0], [41.6, 268.0], [41.7, 268.0], [41.8, 268.0], [41.9, 268.0], [42.0, 270.0], [42.1, 270.0], [42.2, 270.0], [42.3, 270.0], [42.4, 270.0], [42.5, 271.0], [42.6, 271.0], [42.7, 271.0], [42.8, 271.0], [42.9, 271.0], [43.0, 273.0], [43.1, 273.0], [43.2, 273.0], [43.3, 273.0], [43.4, 273.0], [43.5, 275.0], [43.6, 275.0], [43.7, 275.0], [43.8, 275.0], [43.9, 275.0], [44.0, 277.0], [44.1, 277.0], [44.2, 277.0], [44.3, 277.0], [44.4, 277.0], [44.5, 279.0], [44.6, 279.0], [44.7, 279.0], [44.8, 279.0], [44.9, 279.0], [45.0, 279.0], [45.1, 279.0], [45.2, 279.0], [45.3, 279.0], [45.4, 279.0], [45.5, 281.0], [45.6, 281.0], [45.7, 281.0], [45.8, 281.0], [45.9, 281.0], [46.0, 281.0], [46.1, 281.0], [46.2, 281.0], [46.3, 281.0], [46.4, 281.0], [46.5, 282.0], [46.6, 282.0], [46.7, 282.0], [46.8, 282.0], [46.9, 282.0], [47.0, 283.0], [47.1, 283.0], [47.2, 283.0], [47.3, 283.0], [47.4, 283.0], [47.5, 284.0], [47.6, 284.0], [47.7, 284.0], [47.8, 284.0], [47.9, 284.0], [48.0, 284.0], [48.1, 284.0], [48.2, 284.0], [48.3, 284.0], [48.4, 284.0], [48.5, 285.0], [48.6, 285.0], [48.7, 285.0], [48.8, 285.0], [48.9, 285.0], [49.0, 291.0], [49.1, 291.0], [49.2, 291.0], [49.3, 291.0], [49.4, 291.0], [49.5, 294.0], [49.6, 294.0], [49.7, 294.0], [49.8, 294.0], [49.9, 294.0], [50.0, 550.0], [50.1, 550.0], [50.2, 550.0], [50.3, 550.0], [50.4, 550.0], [50.5, 551.0], [50.6, 551.0], [50.7, 551.0], [50.8, 551.0], [50.9, 551.0], [51.0, 554.0], [51.1, 554.0], [51.2, 554.0], [51.3, 554.0], [51.4, 554.0], [51.5, 554.0], [51.6, 554.0], [51.7, 554.0], [51.8, 554.0], [51.9, 554.0], [52.0, 555.0], [52.1, 555.0], [52.2, 555.0], [52.3, 555.0], [52.4, 555.0], [52.5, 555.0], [52.6, 555.0], [52.7, 555.0], [52.8, 555.0], [52.9, 555.0], [53.0, 559.0], [53.1, 559.0], [53.2, 559.0], [53.3, 559.0], [53.4, 559.0], [53.5, 559.0], [53.6, 559.0], [53.7, 559.0], [53.8, 559.0], [53.9, 559.0], [54.0, 562.0], [54.1, 562.0], [54.2, 562.0], [54.3, 562.0], [54.4, 562.0], [54.5, 563.0], [54.6, 563.0], [54.7, 563.0], [54.8, 563.0], [54.9, 563.0], [55.0, 564.0], [55.1, 564.0], [55.2, 564.0], [55.3, 564.0], [55.4, 564.0], [55.5, 566.0], [55.6, 566.0], [55.7, 566.0], [55.8, 566.0], [55.9, 566.0], [56.0, 570.0], [56.1, 570.0], [56.2, 570.0], [56.3, 570.0], [56.4, 570.0], [56.5, 572.0], [56.6, 572.0], [56.7, 572.0], [56.8, 572.0], [56.9, 572.0], [57.0, 572.0], [57.1, 572.0], [57.2, 572.0], [57.3, 572.0], [57.4, 572.0], [57.5, 573.0], [57.6, 573.0], [57.7, 573.0], [57.8, 573.0], [57.9, 573.0], [58.0, 573.0], [58.1, 573.0], [58.2, 573.0], [58.3, 573.0], [58.4, 573.0], [58.5, 574.0], [58.6, 574.0], [58.7, 574.0], [58.8, 574.0], [58.9, 574.0], [59.0, 577.0], [59.1, 577.0], [59.2, 577.0], [59.3, 577.0], [59.4, 577.0], [59.5, 581.0], [59.6, 581.0], [59.7, 581.0], [59.8, 581.0], [59.9, 581.0], [60.0, 585.0], [60.1, 585.0], [60.2, 585.0], [60.3, 585.0], [60.4, 585.0], [60.5, 586.0], [60.6, 586.0], [60.7, 586.0], [60.8, 586.0], [60.9, 586.0], [61.0, 590.0], [61.1, 590.0], [61.2, 590.0], [61.3, 590.0], [61.4, 590.0], [61.5, 594.0], [61.6, 594.0], [61.7, 594.0], [61.8, 594.0], [61.9, 594.0], [62.0, 596.0], [62.1, 596.0], [62.2, 596.0], [62.3, 596.0], [62.4, 596.0], [62.5, 598.0], [62.6, 598.0], [62.7, 598.0], [62.8, 598.0], [62.9, 598.0], [63.0, 599.0], [63.1, 599.0], [63.2, 599.0], [63.3, 599.0], [63.4, 599.0], [63.5, 601.0], [63.6, 601.0], [63.7, 601.0], [63.8, 601.0], [63.9, 601.0], [64.0, 602.0], [64.1, 602.0], [64.2, 602.0], [64.3, 602.0], [64.4, 602.0], [64.5, 603.0], [64.6, 603.0], [64.7, 603.0], [64.8, 603.0], [64.9, 603.0], [65.0, 606.0], [65.1, 606.0], [65.2, 606.0], [65.3, 606.0], [65.4, 606.0], [65.5, 607.0], [65.6, 607.0], [65.7, 607.0], [65.8, 607.0], [65.9, 607.0], [66.0, 607.0], [66.1, 607.0], [66.2, 607.0], [66.3, 607.0], [66.4, 607.0], [66.5, 608.0], [66.6, 608.0], [66.7, 608.0], [66.8, 608.0], [66.9, 608.0], [67.0, 608.0], [67.1, 608.0], [67.2, 608.0], [67.3, 608.0], [67.4, 608.0], [67.5, 609.0], [67.6, 609.0], [67.7, 609.0], [67.8, 609.0], [67.9, 609.0], [68.0, 610.0], [68.1, 610.0], [68.2, 610.0], [68.3, 610.0], [68.4, 610.0], [68.5, 610.0], [68.6, 610.0], [68.7, 610.0], [68.8, 610.0], [68.9, 610.0], [69.0, 612.0], [69.1, 612.0], [69.2, 612.0], [69.3, 612.0], [69.4, 612.0], [69.5, 612.0], [69.6, 612.0], [69.7, 612.0], [69.8, 612.0], [69.9, 612.0], [70.0, 613.0], [70.1, 613.0], [70.2, 613.0], [70.3, 613.0], [70.4, 613.0], [70.5, 613.0], [70.6, 613.0], [70.7, 613.0], [70.8, 613.0], [70.9, 613.0], [71.0, 613.0], [71.1, 613.0], [71.2, 613.0], [71.3, 613.0], [71.4, 613.0], [71.5, 617.0], [71.6, 617.0], [71.7, 617.0], [71.8, 617.0], [71.9, 617.0], [72.0, 619.0], [72.1, 619.0], [72.2, 619.0], [72.3, 619.0], [72.4, 619.0], [72.5, 620.0], [72.6, 620.0], [72.7, 620.0], [72.8, 620.0], [72.9, 620.0], [73.0, 620.0], [73.1, 620.0], [73.2, 620.0], [73.3, 620.0], [73.4, 620.0], [73.5, 621.0], [73.6, 621.0], [73.7, 621.0], [73.8, 621.0], [73.9, 621.0], [74.0, 624.0], [74.1, 624.0], [74.2, 624.0], [74.3, 624.0], [74.4, 624.0], [74.5, 625.0], [74.6, 625.0], [74.7, 625.0], [74.8, 625.0], [74.9, 625.0], [75.0, 625.0], [75.1, 625.0], [75.2, 625.0], [75.3, 625.0], [75.4, 625.0], [75.5, 626.0], [75.6, 626.0], [75.7, 626.0], [75.8, 626.0], [75.9, 626.0], [76.0, 626.0], [76.1, 626.0], [76.2, 626.0], [76.3, 626.0], [76.4, 626.0], [76.5, 627.0], [76.6, 627.0], [76.7, 627.0], [76.8, 627.0], [76.9, 627.0], [77.0, 629.0], [77.1, 629.0], [77.2, 629.0], [77.3, 629.0], [77.4, 629.0], [77.5, 629.0], [77.6, 629.0], [77.7, 629.0], [77.8, 629.0], [77.9, 629.0], [78.0, 629.0], [78.1, 629.0], [78.2, 629.0], [78.3, 629.0], [78.4, 629.0], [78.5, 630.0], [78.6, 630.0], [78.7, 630.0], [78.8, 630.0], [78.9, 630.0], [79.0, 630.0], [79.1, 630.0], [79.2, 630.0], [79.3, 630.0], [79.4, 630.0], [79.5, 631.0], [79.6, 631.0], [79.7, 631.0], [79.8, 631.0], [79.9, 631.0], [80.0, 631.0], [80.1, 631.0], [80.2, 631.0], [80.3, 631.0], [80.4, 631.0], [80.5, 632.0], [80.6, 632.0], [80.7, 632.0], [80.8, 632.0], [80.9, 632.0], [81.0, 632.0], [81.1, 632.0], [81.2, 632.0], [81.3, 632.0], [81.4, 632.0], [81.5, 632.0], [81.6, 632.0], [81.7, 632.0], [81.8, 632.0], [81.9, 632.0], [82.0, 634.0], [82.1, 634.0], [82.2, 634.0], [82.3, 634.0], [82.4, 634.0], [82.5, 634.0], [82.6, 634.0], [82.7, 634.0], [82.8, 634.0], [82.9, 634.0], [83.0, 638.0], [83.1, 638.0], [83.2, 638.0], [83.3, 638.0], [83.4, 638.0], [83.5, 639.0], [83.6, 639.0], [83.7, 639.0], [83.8, 639.0], [83.9, 639.0], [84.0, 639.0], [84.1, 639.0], [84.2, 639.0], [84.3, 639.0], [84.4, 639.0], [84.5, 641.0], [84.6, 641.0], [84.7, 641.0], [84.8, 641.0], [84.9, 641.0], [85.0, 641.0], [85.1, 641.0], [85.2, 641.0], [85.3, 641.0], [85.4, 641.0], [85.5, 644.0], [85.6, 644.0], [85.7, 644.0], [85.8, 644.0], [85.9, 644.0], [86.0, 644.0], [86.1, 644.0], [86.2, 644.0], [86.3, 644.0], [86.4, 644.0], [86.5, 644.0], [86.6, 644.0], [86.7, 644.0], [86.8, 644.0], [86.9, 644.0], [87.0, 644.0], [87.1, 644.0], [87.2, 644.0], [87.3, 644.0], [87.4, 644.0], [87.5, 647.0], [87.6, 647.0], [87.7, 647.0], [87.8, 647.0], [87.9, 647.0], [88.0, 648.0], [88.1, 648.0], [88.2, 648.0], [88.3, 648.0], [88.4, 648.0], [88.5, 649.0], [88.6, 649.0], [88.7, 649.0], [88.8, 649.0], [88.9, 649.0], [89.0, 649.0], [89.1, 649.0], [89.2, 649.0], [89.3, 649.0], [89.4, 649.0], [89.5, 651.0], [89.6, 651.0], [89.7, 651.0], [89.8, 651.0], [89.9, 651.0], [90.0, 653.0], [90.1, 653.0], [90.2, 653.0], [90.3, 653.0], [90.4, 653.0], [90.5, 653.0], [90.6, 653.0], [90.7, 653.0], [90.8, 653.0], [90.9, 653.0], [91.0, 653.0], [91.1, 653.0], [91.2, 653.0], [91.3, 653.0], [91.4, 653.0], [91.5, 654.0], [91.6, 654.0], [91.7, 654.0], [91.8, 654.0], [91.9, 654.0], [92.0, 656.0], [92.1, 656.0], [92.2, 656.0], [92.3, 656.0], [92.4, 656.0], [92.5, 658.0], [92.6, 658.0], [92.7, 658.0], [92.8, 658.0], [92.9, 658.0], [93.0, 658.0], [93.1, 658.0], [93.2, 658.0], [93.3, 658.0], [93.4, 658.0], [93.5, 658.0], [93.6, 658.0], [93.7, 658.0], [93.8, 658.0], [93.9, 658.0], [94.0, 663.0], [94.1, 663.0], [94.2, 663.0], [94.3, 663.0], [94.4, 663.0], [94.5, 665.0], [94.6, 665.0], [94.7, 665.0], [94.8, 665.0], [94.9, 665.0], [95.0, 667.0], [95.1, 667.0], [95.2, 667.0], [95.3, 667.0], [95.4, 667.0], [95.5, 670.0], [95.6, 670.0], [95.7, 670.0], [95.8, 670.0], [95.9, 670.0], [96.0, 674.0], [96.1, 674.0], [96.2, 674.0], [96.3, 674.0], [96.4, 674.0], [96.5, 675.0], [96.6, 675.0], [96.7, 675.0], [96.8, 675.0], [96.9, 675.0], [97.0, 677.0], [97.1, 677.0], [97.2, 677.0], [97.3, 677.0], [97.4, 677.0], [97.5, 679.0], [97.6, 679.0], [97.7, 679.0], [97.8, 679.0], [97.9, 679.0], [98.0, 680.0], [98.1, 680.0], [98.2, 680.0], [98.3, 680.0], [98.4, 680.0], [98.5, 771.0], [98.6, 771.0], [98.7, 771.0], [98.8, 771.0], [98.9, 771.0], [99.0, 1005.0], [99.1, 1005.0], [99.2, 1005.0], [99.3, 1005.0], [99.4, 1005.0], [99.5, 1282.0], [99.6, 1282.0], [99.7, 1282.0], [99.8, 1282.0], [99.9, 1282.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 81.0, "series": [{"data": [[600.0, 70.0], [1200.0, 1.0], [700.0, 1.0], [200.0, 81.0], [100.0, 19.0], [500.0, 27.0], [1000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [[0.0, 100.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 100.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.833333333333332, "minX": 1.77687864E12, "maxY": 5.183673469387754, "series": [{"data": [[1.77687864E12, 5.183673469387754], [1.7768787E12, 4.833333333333332]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7768787E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 186.0, "minX": 1.0, "maxY": 528.951219512195, "series": [{"data": [[4.0, 528.951219512195], [2.0, 459.0], [1.0, 186.0], [5.0, 428.8217821782177], [6.0, 380.391304347826], [3.0, 319.6666666666667], [7.0, 326.8333333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[5.005, 432.60000000000036]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 7.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 199.26666666666668, "minX": 1.77687864E12, "maxY": 21724.383333333335, "series": [{"data": [[1.77687864E12, 21724.383333333335], [1.7768787E12, 21659.866666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77687864E12, 199.26666666666668], [1.7768787E12, 207.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7768787E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 421.23529411764713, "minX": 1.77687864E12, "maxY": 444.4285714285715, "series": [{"data": [[1.77687864E12, 444.4285714285715], [1.7768787E12, 421.23529411764713]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7768787E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 375.7549019607845, "minX": 1.77687864E12, "maxY": 396.97959183673464, "series": [{"data": [[1.77687864E12, 396.97959183673464], [1.7768787E12, 375.7549019607845]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7768787E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 184.2745098039216, "minX": 1.77687864E12, "maxY": 201.9591836734694, "series": [{"data": [[1.77687864E12, 201.9591836734694], [1.7768787E12, 184.2745098039216]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7768787E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 185.0, "minX": 1.77687864E12, "maxY": 1282.0, "series": [{"data": [[1.77687864E12, 1282.0], [1.7768787E12, 771.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77687864E12, 653.1], [1.7768787E12, 651.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77687864E12, 1282.0], [1.7768787E12, 768.2699999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77687864E12, 670.2], [1.7768787E12, 658.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77687864E12, 185.0], [1.7768787E12, 186.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77687864E12, 552.5], [1.7768787E12, 283.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7768787E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 236.0, "minX": 1.0, "maxY": 603.0, "series": [{"data": [[2.0, 282.0], [4.0, 419.0], [1.0, 236.0], [5.0, 280.5], [3.0, 603.0], [6.0, 271.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 206.5, "minX": 1.0, "maxY": 559.0, "series": [{"data": [[2.0, 219.5], [4.0, 380.0], [1.0, 221.0], [5.0, 213.5], [3.0, 559.0], [6.0, 206.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.65, "minX": 1.77687864E12, "maxY": 1.6833333333333333, "series": [{"data": [[1.77687864E12, 1.65], [1.7768787E12, 1.6833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7768787E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.77687864E12, "maxY": 1.7, "series": [{"data": [[1.77687864E12, 1.6333333333333333], [1.7768787E12, 1.7]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7768787E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.77687864E12, "maxY": 1.7, "series": [{"data": [[1.77687864E12, 1.6333333333333333], [1.7768787E12, 1.7]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7768787E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.77687864E12, "maxY": 1.7, "series": [{"data": [[1.77687864E12, 1.6333333333333333], [1.7768787E12, 1.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7768787E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

