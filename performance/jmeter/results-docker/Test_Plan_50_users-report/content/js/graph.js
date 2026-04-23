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
        data: {"result": {"minY": 191.0, "minX": 0.0, "maxY": 1419.0, "series": [{"data": [[0.0, 191.0], [0.1, 191.0], [0.2, 191.0], [0.3, 191.0], [0.4, 191.0], [0.5, 191.0], [0.6, 191.0], [0.7, 191.0], [0.8, 191.0], [0.9, 191.0], [1.0, 192.0], [1.1, 192.0], [1.2, 192.0], [1.3, 192.0], [1.4, 192.0], [1.5, 192.0], [1.6, 192.0], [1.7, 192.0], [1.8, 192.0], [1.9, 192.0], [2.0, 194.0], [2.1, 194.0], [2.2, 194.0], [2.3, 194.0], [2.4, 194.0], [2.5, 194.0], [2.6, 194.0], [2.7, 194.0], [2.8, 194.0], [2.9, 194.0], [3.0, 196.0], [3.1, 196.0], [3.2, 196.0], [3.3, 196.0], [3.4, 196.0], [3.5, 196.0], [3.6, 196.0], [3.7, 196.0], [3.8, 196.0], [3.9, 196.0], [4.0, 198.0], [4.1, 198.0], [4.2, 198.0], [4.3, 198.0], [4.4, 198.0], [4.5, 198.0], [4.6, 198.0], [4.7, 198.0], [4.8, 198.0], [4.9, 198.0], [5.0, 202.0], [5.1, 202.0], [5.2, 202.0], [5.3, 202.0], [5.4, 202.0], [5.5, 202.0], [5.6, 202.0], [5.7, 202.0], [5.8, 202.0], [5.9, 202.0], [6.0, 206.0], [6.1, 206.0], [6.2, 206.0], [6.3, 206.0], [6.4, 206.0], [6.5, 206.0], [6.6, 206.0], [6.7, 206.0], [6.8, 206.0], [6.9, 206.0], [7.0, 213.0], [7.1, 213.0], [7.2, 213.0], [7.3, 213.0], [7.4, 213.0], [7.5, 213.0], [7.6, 213.0], [7.7, 213.0], [7.8, 213.0], [7.9, 213.0], [8.0, 222.0], [8.1, 222.0], [8.2, 222.0], [8.3, 222.0], [8.4, 222.0], [8.5, 222.0], [8.6, 222.0], [8.7, 222.0], [8.8, 222.0], [8.9, 222.0], [9.0, 224.0], [9.1, 224.0], [9.2, 224.0], [9.3, 224.0], [9.4, 224.0], [9.5, 224.0], [9.6, 224.0], [9.7, 224.0], [9.8, 224.0], [9.9, 224.0], [10.0, 227.0], [10.1, 227.0], [10.2, 227.0], [10.3, 227.0], [10.4, 227.0], [10.5, 227.0], [10.6, 227.0], [10.7, 227.0], [10.8, 227.0], [10.9, 227.0], [11.0, 228.0], [11.1, 228.0], [11.2, 228.0], [11.3, 228.0], [11.4, 228.0], [11.5, 228.0], [11.6, 228.0], [11.7, 228.0], [11.8, 228.0], [11.9, 228.0], [12.0, 230.0], [12.1, 230.0], [12.2, 230.0], [12.3, 230.0], [12.4, 230.0], [12.5, 230.0], [12.6, 230.0], [12.7, 230.0], [12.8, 230.0], [12.9, 230.0], [13.0, 233.0], [13.1, 233.0], [13.2, 233.0], [13.3, 233.0], [13.4, 233.0], [13.5, 233.0], [13.6, 233.0], [13.7, 233.0], [13.8, 233.0], [13.9, 233.0], [14.0, 234.0], [14.1, 234.0], [14.2, 234.0], [14.3, 234.0], [14.4, 234.0], [14.5, 234.0], [14.6, 234.0], [14.7, 234.0], [14.8, 234.0], [14.9, 234.0], [15.0, 234.0], [15.1, 234.0], [15.2, 234.0], [15.3, 234.0], [15.4, 234.0], [15.5, 234.0], [15.6, 234.0], [15.7, 234.0], [15.8, 234.0], [15.9, 234.0], [16.0, 235.0], [16.1, 235.0], [16.2, 235.0], [16.3, 235.0], [16.4, 235.0], [16.5, 235.0], [16.6, 235.0], [16.7, 235.0], [16.8, 235.0], [16.9, 235.0], [17.0, 237.0], [17.1, 237.0], [17.2, 237.0], [17.3, 237.0], [17.4, 237.0], [17.5, 237.0], [17.6, 237.0], [17.7, 237.0], [17.8, 237.0], [17.9, 237.0], [18.0, 239.0], [18.1, 239.0], [18.2, 239.0], [18.3, 239.0], [18.4, 239.0], [18.5, 239.0], [18.6, 239.0], [18.7, 239.0], [18.8, 239.0], [18.9, 239.0], [19.0, 242.0], [19.1, 242.0], [19.2, 242.0], [19.3, 242.0], [19.4, 242.0], [19.5, 242.0], [19.6, 242.0], [19.7, 242.0], [19.8, 242.0], [19.9, 242.0], [20.0, 242.0], [20.1, 242.0], [20.2, 242.0], [20.3, 242.0], [20.4, 242.0], [20.5, 242.0], [20.6, 242.0], [20.7, 242.0], [20.8, 242.0], [20.9, 242.0], [21.0, 244.0], [21.1, 244.0], [21.2, 244.0], [21.3, 244.0], [21.4, 244.0], [21.5, 244.0], [21.6, 244.0], [21.7, 244.0], [21.8, 244.0], [21.9, 244.0], [22.0, 245.0], [22.1, 245.0], [22.2, 245.0], [22.3, 245.0], [22.4, 245.0], [22.5, 245.0], [22.6, 245.0], [22.7, 245.0], [22.8, 245.0], [22.9, 245.0], [23.0, 248.0], [23.1, 248.0], [23.2, 248.0], [23.3, 248.0], [23.4, 248.0], [23.5, 248.0], [23.6, 248.0], [23.7, 248.0], [23.8, 248.0], [23.9, 248.0], [24.0, 248.0], [24.1, 248.0], [24.2, 248.0], [24.3, 248.0], [24.4, 248.0], [24.5, 248.0], [24.6, 248.0], [24.7, 248.0], [24.8, 248.0], [24.9, 248.0], [25.0, 249.0], [25.1, 249.0], [25.2, 249.0], [25.3, 249.0], [25.4, 249.0], [25.5, 249.0], [25.6, 249.0], [25.7, 249.0], [25.8, 249.0], [25.9, 249.0], [26.0, 249.0], [26.1, 249.0], [26.2, 249.0], [26.3, 249.0], [26.4, 249.0], [26.5, 249.0], [26.6, 249.0], [26.7, 249.0], [26.8, 249.0], [26.9, 249.0], [27.0, 250.0], [27.1, 250.0], [27.2, 250.0], [27.3, 250.0], [27.4, 250.0], [27.5, 250.0], [27.6, 250.0], [27.7, 250.0], [27.8, 250.0], [27.9, 250.0], [28.0, 251.0], [28.1, 251.0], [28.2, 251.0], [28.3, 251.0], [28.4, 251.0], [28.5, 251.0], [28.6, 251.0], [28.7, 251.0], [28.8, 251.0], [28.9, 251.0], [29.0, 252.0], [29.1, 252.0], [29.2, 252.0], [29.3, 252.0], [29.4, 252.0], [29.5, 252.0], [29.6, 252.0], [29.7, 252.0], [29.8, 252.0], [29.9, 252.0], [30.0, 252.0], [30.1, 252.0], [30.2, 252.0], [30.3, 252.0], [30.4, 252.0], [30.5, 252.0], [30.6, 252.0], [30.7, 252.0], [30.8, 252.0], [30.9, 252.0], [31.0, 260.0], [31.1, 260.0], [31.2, 260.0], [31.3, 260.0], [31.4, 260.0], [31.5, 260.0], [31.6, 260.0], [31.7, 260.0], [31.8, 260.0], [31.9, 260.0], [32.0, 266.0], [32.1, 266.0], [32.2, 266.0], [32.3, 266.0], [32.4, 266.0], [32.5, 266.0], [32.6, 266.0], [32.7, 266.0], [32.8, 266.0], [32.9, 266.0], [33.0, 270.0], [33.1, 270.0], [33.2, 270.0], [33.3, 270.0], [33.4, 270.0], [33.5, 270.0], [33.6, 270.0], [33.7, 270.0], [33.8, 270.0], [33.9, 270.0], [34.0, 271.0], [34.1, 271.0], [34.2, 271.0], [34.3, 271.0], [34.4, 271.0], [34.5, 271.0], [34.6, 271.0], [34.7, 271.0], [34.8, 271.0], [34.9, 271.0], [35.0, 273.0], [35.1, 273.0], [35.2, 273.0], [35.3, 273.0], [35.4, 273.0], [35.5, 273.0], [35.6, 273.0], [35.7, 273.0], [35.8, 273.0], [35.9, 273.0], [36.0, 275.0], [36.1, 275.0], [36.2, 275.0], [36.3, 275.0], [36.4, 275.0], [36.5, 275.0], [36.6, 275.0], [36.7, 275.0], [36.8, 275.0], [36.9, 275.0], [37.0, 275.0], [37.1, 275.0], [37.2, 275.0], [37.3, 275.0], [37.4, 275.0], [37.5, 275.0], [37.6, 275.0], [37.7, 275.0], [37.8, 275.0], [37.9, 275.0], [38.0, 279.0], [38.1, 279.0], [38.2, 279.0], [38.3, 279.0], [38.4, 279.0], [38.5, 279.0], [38.6, 279.0], [38.7, 279.0], [38.8, 279.0], [38.9, 279.0], [39.0, 281.0], [39.1, 281.0], [39.2, 281.0], [39.3, 281.0], [39.4, 281.0], [39.5, 281.0], [39.6, 281.0], [39.7, 281.0], [39.8, 281.0], [39.9, 281.0], [40.0, 283.0], [40.1, 283.0], [40.2, 283.0], [40.3, 283.0], [40.4, 283.0], [40.5, 283.0], [40.6, 283.0], [40.7, 283.0], [40.8, 283.0], [40.9, 283.0], [41.0, 284.0], [41.1, 284.0], [41.2, 284.0], [41.3, 284.0], [41.4, 284.0], [41.5, 284.0], [41.6, 284.0], [41.7, 284.0], [41.8, 284.0], [41.9, 284.0], [42.0, 285.0], [42.1, 285.0], [42.2, 285.0], [42.3, 285.0], [42.4, 285.0], [42.5, 285.0], [42.6, 285.0], [42.7, 285.0], [42.8, 285.0], [42.9, 285.0], [43.0, 285.0], [43.1, 285.0], [43.2, 285.0], [43.3, 285.0], [43.4, 285.0], [43.5, 285.0], [43.6, 285.0], [43.7, 285.0], [43.8, 285.0], [43.9, 285.0], [44.0, 288.0], [44.1, 288.0], [44.2, 288.0], [44.3, 288.0], [44.4, 288.0], [44.5, 288.0], [44.6, 288.0], [44.7, 288.0], [44.8, 288.0], [44.9, 288.0], [45.0, 289.0], [45.1, 289.0], [45.2, 289.0], [45.3, 289.0], [45.4, 289.0], [45.5, 289.0], [45.6, 289.0], [45.7, 289.0], [45.8, 289.0], [45.9, 289.0], [46.0, 290.0], [46.1, 290.0], [46.2, 290.0], [46.3, 290.0], [46.4, 290.0], [46.5, 290.0], [46.6, 290.0], [46.7, 290.0], [46.8, 290.0], [46.9, 290.0], [47.0, 290.0], [47.1, 290.0], [47.2, 290.0], [47.3, 290.0], [47.4, 290.0], [47.5, 290.0], [47.6, 290.0], [47.7, 290.0], [47.8, 290.0], [47.9, 290.0], [48.0, 297.0], [48.1, 297.0], [48.2, 297.0], [48.3, 297.0], [48.4, 297.0], [48.5, 297.0], [48.6, 297.0], [48.7, 297.0], [48.8, 297.0], [48.9, 297.0], [49.0, 302.0], [49.1, 302.0], [49.2, 302.0], [49.3, 302.0], [49.4, 302.0], [49.5, 302.0], [49.6, 302.0], [49.7, 302.0], [49.8, 302.0], [49.9, 302.0], [50.0, 551.0], [50.1, 551.0], [50.2, 551.0], [50.3, 551.0], [50.4, 551.0], [50.5, 551.0], [50.6, 551.0], [50.7, 551.0], [50.8, 551.0], [50.9, 551.0], [51.0, 551.0], [51.1, 551.0], [51.2, 551.0], [51.3, 551.0], [51.4, 551.0], [51.5, 551.0], [51.6, 551.0], [51.7, 551.0], [51.8, 551.0], [51.9, 551.0], [52.0, 555.0], [52.1, 555.0], [52.2, 555.0], [52.3, 555.0], [52.4, 555.0], [52.5, 555.0], [52.6, 555.0], [52.7, 555.0], [52.8, 555.0], [52.9, 555.0], [53.0, 556.0], [53.1, 556.0], [53.2, 556.0], [53.3, 556.0], [53.4, 556.0], [53.5, 556.0], [53.6, 556.0], [53.7, 556.0], [53.8, 556.0], [53.9, 556.0], [54.0, 556.0], [54.1, 556.0], [54.2, 556.0], [54.3, 556.0], [54.4, 556.0], [54.5, 556.0], [54.6, 556.0], [54.7, 556.0], [54.8, 556.0], [54.9, 556.0], [55.0, 559.0], [55.1, 559.0], [55.2, 559.0], [55.3, 559.0], [55.4, 559.0], [55.5, 559.0], [55.6, 559.0], [55.7, 559.0], [55.8, 559.0], [55.9, 559.0], [56.0, 564.0], [56.1, 564.0], [56.2, 564.0], [56.3, 564.0], [56.4, 564.0], [56.5, 564.0], [56.6, 564.0], [56.7, 564.0], [56.8, 564.0], [56.9, 564.0], [57.0, 564.0], [57.1, 564.0], [57.2, 564.0], [57.3, 564.0], [57.4, 564.0], [57.5, 564.0], [57.6, 564.0], [57.7, 564.0], [57.8, 564.0], [57.9, 564.0], [58.0, 565.0], [58.1, 565.0], [58.2, 565.0], [58.3, 565.0], [58.4, 565.0], [58.5, 565.0], [58.6, 565.0], [58.7, 565.0], [58.8, 565.0], [58.9, 565.0], [59.0, 571.0], [59.1, 571.0], [59.2, 571.0], [59.3, 571.0], [59.4, 571.0], [59.5, 571.0], [59.6, 571.0], [59.7, 571.0], [59.8, 571.0], [59.9, 571.0], [60.0, 571.0], [60.1, 571.0], [60.2, 571.0], [60.3, 571.0], [60.4, 571.0], [60.5, 571.0], [60.6, 571.0], [60.7, 571.0], [60.8, 571.0], [60.9, 571.0], [61.0, 573.0], [61.1, 573.0], [61.2, 573.0], [61.3, 573.0], [61.4, 573.0], [61.5, 573.0], [61.6, 573.0], [61.7, 573.0], [61.8, 573.0], [61.9, 573.0], [62.0, 574.0], [62.1, 574.0], [62.2, 574.0], [62.3, 574.0], [62.4, 574.0], [62.5, 574.0], [62.6, 574.0], [62.7, 574.0], [62.8, 574.0], [62.9, 574.0], [63.0, 580.0], [63.1, 580.0], [63.2, 580.0], [63.3, 580.0], [63.4, 580.0], [63.5, 580.0], [63.6, 580.0], [63.7, 580.0], [63.8, 580.0], [63.9, 580.0], [64.0, 584.0], [64.1, 584.0], [64.2, 584.0], [64.3, 584.0], [64.4, 584.0], [64.5, 584.0], [64.6, 584.0], [64.7, 584.0], [64.8, 584.0], [64.9, 584.0], [65.0, 585.0], [65.1, 585.0], [65.2, 585.0], [65.3, 585.0], [65.4, 585.0], [65.5, 585.0], [65.6, 585.0], [65.7, 585.0], [65.8, 585.0], [65.9, 585.0], [66.0, 585.0], [66.1, 585.0], [66.2, 585.0], [66.3, 585.0], [66.4, 585.0], [66.5, 585.0], [66.6, 585.0], [66.7, 585.0], [66.8, 585.0], [66.9, 585.0], [67.0, 588.0], [67.1, 588.0], [67.2, 588.0], [67.3, 588.0], [67.4, 588.0], [67.5, 588.0], [67.6, 588.0], [67.7, 588.0], [67.8, 588.0], [67.9, 588.0], [68.0, 591.0], [68.1, 591.0], [68.2, 591.0], [68.3, 591.0], [68.4, 591.0], [68.5, 591.0], [68.6, 591.0], [68.7, 591.0], [68.8, 591.0], [68.9, 591.0], [69.0, 594.0], [69.1, 594.0], [69.2, 594.0], [69.3, 594.0], [69.4, 594.0], [69.5, 594.0], [69.6, 594.0], [69.7, 594.0], [69.8, 594.0], [69.9, 594.0], [70.0, 595.0], [70.1, 595.0], [70.2, 595.0], [70.3, 595.0], [70.4, 595.0], [70.5, 595.0], [70.6, 595.0], [70.7, 595.0], [70.8, 595.0], [70.9, 595.0], [71.0, 603.0], [71.1, 603.0], [71.2, 603.0], [71.3, 603.0], [71.4, 603.0], [71.5, 603.0], [71.6, 603.0], [71.7, 603.0], [71.8, 603.0], [71.9, 603.0], [72.0, 605.0], [72.1, 605.0], [72.2, 605.0], [72.3, 605.0], [72.4, 605.0], [72.5, 605.0], [72.6, 605.0], [72.7, 605.0], [72.8, 605.0], [72.9, 605.0], [73.0, 606.0], [73.1, 606.0], [73.2, 606.0], [73.3, 606.0], [73.4, 606.0], [73.5, 606.0], [73.6, 606.0], [73.7, 606.0], [73.8, 606.0], [73.9, 606.0], [74.0, 609.0], [74.1, 609.0], [74.2, 609.0], [74.3, 609.0], [74.4, 609.0], [74.5, 609.0], [74.6, 609.0], [74.7, 609.0], [74.8, 609.0], [74.9, 609.0], [75.0, 616.0], [75.1, 616.0], [75.2, 616.0], [75.3, 616.0], [75.4, 616.0], [75.5, 616.0], [75.6, 616.0], [75.7, 616.0], [75.8, 616.0], [75.9, 616.0], [76.0, 618.0], [76.1, 618.0], [76.2, 618.0], [76.3, 618.0], [76.4, 618.0], [76.5, 618.0], [76.6, 618.0], [76.7, 618.0], [76.8, 618.0], [76.9, 618.0], [77.0, 620.0], [77.1, 620.0], [77.2, 620.0], [77.3, 620.0], [77.4, 620.0], [77.5, 620.0], [77.6, 620.0], [77.7, 620.0], [77.8, 620.0], [77.9, 620.0], [78.0, 620.0], [78.1, 620.0], [78.2, 620.0], [78.3, 620.0], [78.4, 620.0], [78.5, 620.0], [78.6, 620.0], [78.7, 620.0], [78.8, 620.0], [78.9, 620.0], [79.0, 621.0], [79.1, 621.0], [79.2, 621.0], [79.3, 621.0], [79.4, 621.0], [79.5, 621.0], [79.6, 621.0], [79.7, 621.0], [79.8, 621.0], [79.9, 621.0], [80.0, 622.0], [80.1, 622.0], [80.2, 622.0], [80.3, 622.0], [80.4, 622.0], [80.5, 622.0], [80.6, 622.0], [80.7, 622.0], [80.8, 622.0], [80.9, 622.0], [81.0, 623.0], [81.1, 623.0], [81.2, 623.0], [81.3, 623.0], [81.4, 623.0], [81.5, 623.0], [81.6, 623.0], [81.7, 623.0], [81.8, 623.0], [81.9, 623.0], [82.0, 626.0], [82.1, 626.0], [82.2, 626.0], [82.3, 626.0], [82.4, 626.0], [82.5, 626.0], [82.6, 626.0], [82.7, 626.0], [82.8, 626.0], [82.9, 626.0], [83.0, 627.0], [83.1, 627.0], [83.2, 627.0], [83.3, 627.0], [83.4, 627.0], [83.5, 627.0], [83.6, 627.0], [83.7, 627.0], [83.8, 627.0], [83.9, 627.0], [84.0, 627.0], [84.1, 627.0], [84.2, 627.0], [84.3, 627.0], [84.4, 627.0], [84.5, 627.0], [84.6, 627.0], [84.7, 627.0], [84.8, 627.0], [84.9, 627.0], [85.0, 630.0], [85.1, 630.0], [85.2, 630.0], [85.3, 630.0], [85.4, 630.0], [85.5, 630.0], [85.6, 630.0], [85.7, 630.0], [85.8, 630.0], [85.9, 630.0], [86.0, 631.0], [86.1, 631.0], [86.2, 631.0], [86.3, 631.0], [86.4, 631.0], [86.5, 631.0], [86.6, 631.0], [86.7, 631.0], [86.8, 631.0], [86.9, 631.0], [87.0, 637.0], [87.1, 637.0], [87.2, 637.0], [87.3, 637.0], [87.4, 637.0], [87.5, 637.0], [87.6, 637.0], [87.7, 637.0], [87.8, 637.0], [87.9, 637.0], [88.0, 641.0], [88.1, 641.0], [88.2, 641.0], [88.3, 641.0], [88.4, 641.0], [88.5, 641.0], [88.6, 641.0], [88.7, 641.0], [88.8, 641.0], [88.9, 641.0], [89.0, 646.0], [89.1, 646.0], [89.2, 646.0], [89.3, 646.0], [89.4, 646.0], [89.5, 646.0], [89.6, 646.0], [89.7, 646.0], [89.8, 646.0], [89.9, 646.0], [90.0, 650.0], [90.1, 650.0], [90.2, 650.0], [90.3, 650.0], [90.4, 650.0], [90.5, 650.0], [90.6, 650.0], [90.7, 650.0], [90.8, 650.0], [90.9, 650.0], [91.0, 651.0], [91.1, 651.0], [91.2, 651.0], [91.3, 651.0], [91.4, 651.0], [91.5, 651.0], [91.6, 651.0], [91.7, 651.0], [91.8, 651.0], [91.9, 651.0], [92.0, 657.0], [92.1, 657.0], [92.2, 657.0], [92.3, 657.0], [92.4, 657.0], [92.5, 657.0], [92.6, 657.0], [92.7, 657.0], [92.8, 657.0], [92.9, 657.0], [93.0, 661.0], [93.1, 661.0], [93.2, 661.0], [93.3, 661.0], [93.4, 661.0], [93.5, 661.0], [93.6, 661.0], [93.7, 661.0], [93.8, 661.0], [93.9, 661.0], [94.0, 664.0], [94.1, 664.0], [94.2, 664.0], [94.3, 664.0], [94.4, 664.0], [94.5, 664.0], [94.6, 664.0], [94.7, 664.0], [94.8, 664.0], [94.9, 664.0], [95.0, 669.0], [95.1, 669.0], [95.2, 669.0], [95.3, 669.0], [95.4, 669.0], [95.5, 669.0], [95.6, 669.0], [95.7, 669.0], [95.8, 669.0], [95.9, 669.0], [96.0, 669.0], [96.1, 669.0], [96.2, 669.0], [96.3, 669.0], [96.4, 669.0], [96.5, 669.0], [96.6, 669.0], [96.7, 669.0], [96.8, 669.0], [96.9, 669.0], [97.0, 714.0], [97.1, 714.0], [97.2, 714.0], [97.3, 714.0], [97.4, 714.0], [97.5, 714.0], [97.6, 714.0], [97.7, 714.0], [97.8, 714.0], [97.9, 714.0], [98.0, 1334.0], [98.1, 1334.0], [98.2, 1334.0], [98.3, 1334.0], [98.4, 1334.0], [98.5, 1334.0], [98.6, 1334.0], [98.7, 1334.0], [98.8, 1334.0], [98.9, 1334.0], [99.0, 1419.0], [99.1, 1419.0], [99.2, 1419.0], [99.3, 1419.0], [99.4, 1419.0], [99.5, 1419.0], [99.6, 1419.0], [99.7, 1419.0], [99.8, 1419.0], [99.9, 1419.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 44.0, "series": [{"data": [[600.0, 26.0], [300.0, 1.0], [1300.0, 1.0], [700.0, 1.0], [1400.0, 1.0], [200.0, 44.0], [100.0, 5.0], [500.0, 21.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 50.0, "series": [{"data": [[0.0, 50.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 50.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.2299999999999995, "minX": 1.77687876E12, "maxY": 3.2299999999999995, "series": [{"data": [[1.77687876E12, 3.2299999999999995]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77687876E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 270.0, "minX": 1.0, "maxY": 483.31578947368405, "series": [{"data": [[4.0, 367.75862068965523], [2.0, 470.5], [1.0, 270.0], [5.0, 396.3333333333333], [3.0, 483.31578947368405]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[3.2299999999999995, 443.7799999999999]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 203.33333333333334, "minX": 1.77687876E12, "maxY": 20433.783333333333, "series": [{"data": [[1.77687876E12, 20433.783333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77687876E12, 203.33333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77687876E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 443.7799999999999, "minX": 1.77687876E12, "maxY": 443.7799999999999, "series": [{"data": [[1.77687876E12, 443.7799999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77687876E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 398.36, "minX": 1.77687876E12, "maxY": 398.36, "series": [{"data": [[1.77687876E12, 398.36]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77687876E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 201.28999999999996, "minX": 1.77687876E12, "maxY": 201.28999999999996, "series": [{"data": [[1.77687876E12, 201.28999999999996]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77687876E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 191.0, "minX": 1.77687876E12, "maxY": 1419.0, "series": [{"data": [[1.77687876E12, 1419.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77687876E12, 649.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77687876E12, 1418.1499999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77687876E12, 668.75]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77687876E12, 191.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77687876E12, 426.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77687876E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 272.5, "minX": 1.0, "maxY": 572.5, "series": [{"data": [[2.0, 572.5], [1.0, 553.5], [4.0, 295.0], [5.0, 272.5], [3.0, 280.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 212.0, "minX": 1.0, "maxY": 548.5, "series": [{"data": [[2.0, 548.5], [1.0, 531.0], [4.0, 225.5], [5.0, 212.0], [3.0, 220.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.77687876E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.77687876E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77687876E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.77687876E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.77687876E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77687876E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.77687876E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.77687876E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77687876E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.77687876E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.77687876E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77687876E12, "title": "Total Transactions Per Second"}},
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

