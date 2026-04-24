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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 1412.0, "series": [{"data": [[0.0, 179.0], [0.1, 179.0], [0.2, 179.0], [0.3, 179.0], [0.4, 179.0], [0.5, 182.0], [0.6, 182.0], [0.7, 182.0], [0.8, 182.0], [0.9, 182.0], [1.0, 183.0], [1.1, 183.0], [1.2, 183.0], [1.3, 183.0], [1.4, 183.0], [1.5, 183.0], [1.6, 183.0], [1.7, 183.0], [1.8, 183.0], [1.9, 183.0], [2.0, 185.0], [2.1, 185.0], [2.2, 185.0], [2.3, 185.0], [2.4, 185.0], [2.5, 190.0], [2.6, 190.0], [2.7, 190.0], [2.8, 190.0], [2.9, 190.0], [3.0, 191.0], [3.1, 191.0], [3.2, 191.0], [3.3, 191.0], [3.4, 191.0], [3.5, 191.0], [3.6, 191.0], [3.7, 191.0], [3.8, 191.0], [3.9, 191.0], [4.0, 191.0], [4.1, 191.0], [4.2, 191.0], [4.3, 191.0], [4.4, 191.0], [4.5, 191.0], [4.6, 191.0], [4.7, 191.0], [4.8, 191.0], [4.9, 191.0], [5.0, 192.0], [5.1, 192.0], [5.2, 192.0], [5.3, 192.0], [5.4, 192.0], [5.5, 192.0], [5.6, 192.0], [5.7, 192.0], [5.8, 192.0], [5.9, 192.0], [6.0, 193.0], [6.1, 193.0], [6.2, 193.0], [6.3, 193.0], [6.4, 193.0], [6.5, 193.0], [6.6, 193.0], [6.7, 193.0], [6.8, 193.0], [6.9, 193.0], [7.0, 193.0], [7.1, 193.0], [7.2, 193.0], [7.3, 193.0], [7.4, 193.0], [7.5, 195.0], [7.6, 195.0], [7.7, 195.0], [7.8, 195.0], [7.9, 195.0], [8.0, 195.0], [8.1, 195.0], [8.2, 195.0], [8.3, 195.0], [8.4, 195.0], [8.5, 195.0], [8.6, 195.0], [8.7, 195.0], [8.8, 195.0], [8.9, 195.0], [9.0, 196.0], [9.1, 196.0], [9.2, 196.0], [9.3, 196.0], [9.4, 196.0], [9.5, 197.0], [9.6, 197.0], [9.7, 197.0], [9.8, 197.0], [9.9, 197.0], [10.0, 197.0], [10.1, 197.0], [10.2, 197.0], [10.3, 197.0], [10.4, 197.0], [10.5, 198.0], [10.6, 198.0], [10.7, 198.0], [10.8, 198.0], [10.9, 198.0], [11.0, 199.0], [11.1, 199.0], [11.2, 199.0], [11.3, 199.0], [11.4, 199.0], [11.5, 200.0], [11.6, 200.0], [11.7, 200.0], [11.8, 200.0], [11.9, 200.0], [12.0, 200.0], [12.1, 200.0], [12.2, 200.0], [12.3, 200.0], [12.4, 200.0], [12.5, 200.0], [12.6, 200.0], [12.7, 200.0], [12.8, 200.0], [12.9, 200.0], [13.0, 201.0], [13.1, 201.0], [13.2, 201.0], [13.3, 201.0], [13.4, 201.0], [13.5, 201.0], [13.6, 201.0], [13.7, 201.0], [13.8, 201.0], [13.9, 201.0], [14.0, 202.0], [14.1, 202.0], [14.2, 202.0], [14.3, 202.0], [14.4, 202.0], [14.5, 211.0], [14.6, 211.0], [14.7, 211.0], [14.8, 211.0], [14.9, 211.0], [15.0, 213.0], [15.1, 213.0], [15.2, 213.0], [15.3, 213.0], [15.4, 213.0], [15.5, 219.0], [15.6, 219.0], [15.7, 219.0], [15.8, 219.0], [15.9, 219.0], [16.0, 220.0], [16.1, 220.0], [16.2, 220.0], [16.3, 220.0], [16.4, 220.0], [16.5, 221.0], [16.6, 221.0], [16.7, 221.0], [16.8, 221.0], [16.9, 221.0], [17.0, 221.0], [17.1, 221.0], [17.2, 221.0], [17.3, 221.0], [17.4, 221.0], [17.5, 224.0], [17.6, 224.0], [17.7, 224.0], [17.8, 224.0], [17.9, 224.0], [18.0, 226.0], [18.1, 226.0], [18.2, 226.0], [18.3, 226.0], [18.4, 226.0], [18.5, 227.0], [18.6, 227.0], [18.7, 227.0], [18.8, 227.0], [18.9, 227.0], [19.0, 229.0], [19.1, 229.0], [19.2, 229.0], [19.3, 229.0], [19.4, 229.0], [19.5, 230.0], [19.6, 230.0], [19.7, 230.0], [19.8, 230.0], [19.9, 230.0], [20.0, 231.0], [20.1, 231.0], [20.2, 231.0], [20.3, 231.0], [20.4, 231.0], [20.5, 232.0], [20.6, 232.0], [20.7, 232.0], [20.8, 232.0], [20.9, 232.0], [21.0, 232.0], [21.1, 232.0], [21.2, 232.0], [21.3, 232.0], [21.4, 232.0], [21.5, 233.0], [21.6, 233.0], [21.7, 233.0], [21.8, 233.0], [21.9, 233.0], [22.0, 233.0], [22.1, 233.0], [22.2, 233.0], [22.3, 233.0], [22.4, 233.0], [22.5, 233.0], [22.6, 233.0], [22.7, 233.0], [22.8, 233.0], [22.9, 233.0], [23.0, 234.0], [23.1, 234.0], [23.2, 234.0], [23.3, 234.0], [23.4, 234.0], [23.5, 237.0], [23.6, 237.0], [23.7, 237.0], [23.8, 237.0], [23.9, 237.0], [24.0, 238.0], [24.1, 238.0], [24.2, 238.0], [24.3, 238.0], [24.4, 238.0], [24.5, 239.0], [24.6, 239.0], [24.7, 239.0], [24.8, 239.0], [24.9, 239.0], [25.0, 239.0], [25.1, 239.0], [25.2, 239.0], [25.3, 239.0], [25.4, 239.0], [25.5, 239.0], [25.6, 239.0], [25.7, 239.0], [25.8, 239.0], [25.9, 239.0], [26.0, 239.0], [26.1, 239.0], [26.2, 239.0], [26.3, 239.0], [26.4, 239.0], [26.5, 239.0], [26.6, 239.0], [26.7, 239.0], [26.8, 239.0], [26.9, 239.0], [27.0, 241.0], [27.1, 241.0], [27.2, 241.0], [27.3, 241.0], [27.4, 241.0], [27.5, 241.0], [27.6, 241.0], [27.7, 241.0], [27.8, 241.0], [27.9, 241.0], [28.0, 242.0], [28.1, 242.0], [28.2, 242.0], [28.3, 242.0], [28.4, 242.0], [28.5, 244.0], [28.6, 244.0], [28.7, 244.0], [28.8, 244.0], [28.9, 244.0], [29.0, 244.0], [29.1, 244.0], [29.2, 244.0], [29.3, 244.0], [29.4, 244.0], [29.5, 244.0], [29.6, 244.0], [29.7, 244.0], [29.8, 244.0], [29.9, 244.0], [30.0, 244.0], [30.1, 244.0], [30.2, 244.0], [30.3, 244.0], [30.4, 244.0], [30.5, 245.0], [30.6, 245.0], [30.7, 245.0], [30.8, 245.0], [30.9, 245.0], [31.0, 245.0], [31.1, 245.0], [31.2, 245.0], [31.3, 245.0], [31.4, 245.0], [31.5, 246.0], [31.6, 246.0], [31.7, 246.0], [31.8, 246.0], [31.9, 246.0], [32.0, 246.0], [32.1, 246.0], [32.2, 246.0], [32.3, 246.0], [32.4, 246.0], [32.5, 246.0], [32.6, 246.0], [32.7, 246.0], [32.8, 246.0], [32.9, 246.0], [33.0, 247.0], [33.1, 247.0], [33.2, 247.0], [33.3, 247.0], [33.4, 247.0], [33.5, 248.0], [33.6, 248.0], [33.7, 248.0], [33.8, 248.0], [33.9, 248.0], [34.0, 248.0], [34.1, 248.0], [34.2, 248.0], [34.3, 248.0], [34.4, 248.0], [34.5, 248.0], [34.6, 248.0], [34.7, 248.0], [34.8, 248.0], [34.9, 248.0], [35.0, 249.0], [35.1, 249.0], [35.2, 249.0], [35.3, 249.0], [35.4, 249.0], [35.5, 249.0], [35.6, 249.0], [35.7, 249.0], [35.8, 249.0], [35.9, 249.0], [36.0, 249.0], [36.1, 249.0], [36.2, 249.0], [36.3, 249.0], [36.4, 249.0], [36.5, 249.0], [36.6, 249.0], [36.7, 249.0], [36.8, 249.0], [36.9, 249.0], [37.0, 249.0], [37.1, 249.0], [37.2, 249.0], [37.3, 249.0], [37.4, 249.0], [37.5, 249.0], [37.6, 249.0], [37.7, 249.0], [37.8, 249.0], [37.9, 249.0], [38.0, 250.0], [38.1, 250.0], [38.2, 250.0], [38.3, 250.0], [38.4, 250.0], [38.5, 252.0], [38.6, 252.0], [38.7, 252.0], [38.8, 252.0], [38.9, 252.0], [39.0, 255.0], [39.1, 255.0], [39.2, 255.0], [39.3, 255.0], [39.4, 255.0], [39.5, 259.0], [39.6, 259.0], [39.7, 259.0], [39.8, 259.0], [39.9, 259.0], [40.0, 264.0], [40.1, 264.0], [40.2, 264.0], [40.3, 264.0], [40.4, 264.0], [40.5, 265.0], [40.6, 265.0], [40.7, 265.0], [40.8, 265.0], [40.9, 265.0], [41.0, 275.0], [41.1, 275.0], [41.2, 275.0], [41.3, 275.0], [41.4, 275.0], [41.5, 278.0], [41.6, 278.0], [41.7, 278.0], [41.8, 278.0], [41.9, 278.0], [42.0, 279.0], [42.1, 279.0], [42.2, 279.0], [42.3, 279.0], [42.4, 279.0], [42.5, 281.0], [42.6, 281.0], [42.7, 281.0], [42.8, 281.0], [42.9, 281.0], [43.0, 281.0], [43.1, 281.0], [43.2, 281.0], [43.3, 281.0], [43.4, 281.0], [43.5, 282.0], [43.6, 282.0], [43.7, 282.0], [43.8, 282.0], [43.9, 282.0], [44.0, 282.0], [44.1, 282.0], [44.2, 282.0], [44.3, 282.0], [44.4, 282.0], [44.5, 283.0], [44.6, 283.0], [44.7, 283.0], [44.8, 283.0], [44.9, 283.0], [45.0, 283.0], [45.1, 283.0], [45.2, 283.0], [45.3, 283.0], [45.4, 283.0], [45.5, 284.0], [45.6, 284.0], [45.7, 284.0], [45.8, 284.0], [45.9, 284.0], [46.0, 286.0], [46.1, 286.0], [46.2, 286.0], [46.3, 286.0], [46.4, 286.0], [46.5, 288.0], [46.6, 288.0], [46.7, 288.0], [46.8, 288.0], [46.9, 288.0], [47.0, 288.0], [47.1, 288.0], [47.2, 288.0], [47.3, 288.0], [47.4, 288.0], [47.5, 289.0], [47.6, 289.0], [47.7, 289.0], [47.8, 289.0], [47.9, 289.0], [48.0, 289.0], [48.1, 289.0], [48.2, 289.0], [48.3, 289.0], [48.4, 289.0], [48.5, 291.0], [48.6, 291.0], [48.7, 291.0], [48.8, 291.0], [48.9, 291.0], [49.0, 292.0], [49.1, 292.0], [49.2, 292.0], [49.3, 292.0], [49.4, 292.0], [49.5, 293.0], [49.6, 293.0], [49.7, 293.0], [49.8, 293.0], [49.9, 293.0], [50.0, 544.0], [50.1, 544.0], [50.2, 544.0], [50.3, 544.0], [50.4, 544.0], [50.5, 549.0], [50.6, 549.0], [50.7, 549.0], [50.8, 549.0], [50.9, 549.0], [51.0, 551.0], [51.1, 551.0], [51.2, 551.0], [51.3, 551.0], [51.4, 551.0], [51.5, 553.0], [51.6, 553.0], [51.7, 553.0], [51.8, 553.0], [51.9, 553.0], [52.0, 554.0], [52.1, 554.0], [52.2, 554.0], [52.3, 554.0], [52.4, 554.0], [52.5, 557.0], [52.6, 557.0], [52.7, 557.0], [52.8, 557.0], [52.9, 557.0], [53.0, 557.0], [53.1, 557.0], [53.2, 557.0], [53.3, 557.0], [53.4, 557.0], [53.5, 561.0], [53.6, 561.0], [53.7, 561.0], [53.8, 561.0], [53.9, 561.0], [54.0, 563.0], [54.1, 563.0], [54.2, 563.0], [54.3, 563.0], [54.4, 563.0], [54.5, 565.0], [54.6, 565.0], [54.7, 565.0], [54.8, 565.0], [54.9, 565.0], [55.0, 566.0], [55.1, 566.0], [55.2, 566.0], [55.3, 566.0], [55.4, 566.0], [55.5, 568.0], [55.6, 568.0], [55.7, 568.0], [55.8, 568.0], [55.9, 568.0], [56.0, 569.0], [56.1, 569.0], [56.2, 569.0], [56.3, 569.0], [56.4, 569.0], [56.5, 570.0], [56.6, 570.0], [56.7, 570.0], [56.8, 570.0], [56.9, 570.0], [57.0, 576.0], [57.1, 576.0], [57.2, 576.0], [57.3, 576.0], [57.4, 576.0], [57.5, 577.0], [57.6, 577.0], [57.7, 577.0], [57.8, 577.0], [57.9, 577.0], [58.0, 578.0], [58.1, 578.0], [58.2, 578.0], [58.3, 578.0], [58.4, 578.0], [58.5, 580.0], [58.6, 580.0], [58.7, 580.0], [58.8, 580.0], [58.9, 580.0], [59.0, 582.0], [59.1, 582.0], [59.2, 582.0], [59.3, 582.0], [59.4, 582.0], [59.5, 585.0], [59.6, 585.0], [59.7, 585.0], [59.8, 585.0], [59.9, 585.0], [60.0, 586.0], [60.1, 586.0], [60.2, 586.0], [60.3, 586.0], [60.4, 586.0], [60.5, 586.0], [60.6, 586.0], [60.7, 586.0], [60.8, 586.0], [60.9, 586.0], [61.0, 594.0], [61.1, 594.0], [61.2, 594.0], [61.3, 594.0], [61.4, 594.0], [61.5, 602.0], [61.6, 602.0], [61.7, 602.0], [61.8, 602.0], [61.9, 602.0], [62.0, 602.0], [62.1, 602.0], [62.2, 602.0], [62.3, 602.0], [62.4, 602.0], [62.5, 605.0], [62.6, 605.0], [62.7, 605.0], [62.8, 605.0], [62.9, 605.0], [63.0, 606.0], [63.1, 606.0], [63.2, 606.0], [63.3, 606.0], [63.4, 606.0], [63.5, 606.0], [63.6, 606.0], [63.7, 606.0], [63.8, 606.0], [63.9, 606.0], [64.0, 607.0], [64.1, 607.0], [64.2, 607.0], [64.3, 607.0], [64.4, 607.0], [64.5, 613.0], [64.6, 613.0], [64.7, 613.0], [64.8, 613.0], [64.9, 613.0], [65.0, 613.0], [65.1, 613.0], [65.2, 613.0], [65.3, 613.0], [65.4, 613.0], [65.5, 615.0], [65.6, 615.0], [65.7, 615.0], [65.8, 615.0], [65.9, 615.0], [66.0, 615.0], [66.1, 615.0], [66.2, 615.0], [66.3, 615.0], [66.4, 615.0], [66.5, 616.0], [66.6, 616.0], [66.7, 616.0], [66.8, 616.0], [66.9, 616.0], [67.0, 617.0], [67.1, 617.0], [67.2, 617.0], [67.3, 617.0], [67.4, 617.0], [67.5, 620.0], [67.6, 620.0], [67.7, 620.0], [67.8, 620.0], [67.9, 620.0], [68.0, 620.0], [68.1, 620.0], [68.2, 620.0], [68.3, 620.0], [68.4, 620.0], [68.5, 623.0], [68.6, 623.0], [68.7, 623.0], [68.8, 623.0], [68.9, 623.0], [69.0, 626.0], [69.1, 626.0], [69.2, 626.0], [69.3, 626.0], [69.4, 626.0], [69.5, 626.0], [69.6, 626.0], [69.7, 626.0], [69.8, 626.0], [69.9, 626.0], [70.0, 626.0], [70.1, 626.0], [70.2, 626.0], [70.3, 626.0], [70.4, 626.0], [70.5, 627.0], [70.6, 627.0], [70.7, 627.0], [70.8, 627.0], [70.9, 627.0], [71.0, 630.0], [71.1, 630.0], [71.2, 630.0], [71.3, 630.0], [71.4, 630.0], [71.5, 631.0], [71.6, 631.0], [71.7, 631.0], [71.8, 631.0], [71.9, 631.0], [72.0, 634.0], [72.1, 634.0], [72.2, 634.0], [72.3, 634.0], [72.4, 634.0], [72.5, 635.0], [72.6, 635.0], [72.7, 635.0], [72.8, 635.0], [72.9, 635.0], [73.0, 638.0], [73.1, 638.0], [73.2, 638.0], [73.3, 638.0], [73.4, 638.0], [73.5, 642.0], [73.6, 642.0], [73.7, 642.0], [73.8, 642.0], [73.9, 642.0], [74.0, 644.0], [74.1, 644.0], [74.2, 644.0], [74.3, 644.0], [74.4, 644.0], [74.5, 652.0], [74.6, 652.0], [74.7, 652.0], [74.8, 652.0], [74.9, 652.0], [75.0, 661.0], [75.1, 661.0], [75.2, 661.0], [75.3, 661.0], [75.4, 661.0], [75.5, 662.0], [75.6, 662.0], [75.7, 662.0], [75.8, 662.0], [75.9, 662.0], [76.0, 663.0], [76.1, 663.0], [76.2, 663.0], [76.3, 663.0], [76.4, 663.0], [76.5, 663.0], [76.6, 663.0], [76.7, 663.0], [76.8, 663.0], [76.9, 663.0], [77.0, 663.0], [77.1, 663.0], [77.2, 663.0], [77.3, 663.0], [77.4, 663.0], [77.5, 667.0], [77.6, 667.0], [77.7, 667.0], [77.8, 667.0], [77.9, 667.0], [78.0, 667.0], [78.1, 667.0], [78.2, 667.0], [78.3, 667.0], [78.4, 667.0], [78.5, 668.0], [78.6, 668.0], [78.7, 668.0], [78.8, 668.0], [78.9, 668.0], [79.0, 668.0], [79.1, 668.0], [79.2, 668.0], [79.3, 668.0], [79.4, 668.0], [79.5, 695.0], [79.6, 695.0], [79.7, 695.0], [79.8, 695.0], [79.9, 695.0], [80.0, 696.0], [80.1, 696.0], [80.2, 696.0], [80.3, 696.0], [80.4, 696.0], [80.5, 702.0], [80.6, 702.0], [80.7, 702.0], [80.8, 702.0], [80.9, 702.0], [81.0, 702.0], [81.1, 702.0], [81.2, 702.0], [81.3, 702.0], [81.4, 702.0], [81.5, 708.0], [81.6, 708.0], [81.7, 708.0], [81.8, 708.0], [81.9, 708.0], [82.0, 709.0], [82.1, 709.0], [82.2, 709.0], [82.3, 709.0], [82.4, 709.0], [82.5, 712.0], [82.6, 712.0], [82.7, 712.0], [82.8, 712.0], [82.9, 712.0], [83.0, 719.0], [83.1, 719.0], [83.2, 719.0], [83.3, 719.0], [83.4, 719.0], [83.5, 720.0], [83.6, 720.0], [83.7, 720.0], [83.8, 720.0], [83.9, 720.0], [84.0, 721.0], [84.1, 721.0], [84.2, 721.0], [84.3, 721.0], [84.4, 721.0], [84.5, 727.0], [84.6, 727.0], [84.7, 727.0], [84.8, 727.0], [84.9, 727.0], [85.0, 740.0], [85.1, 740.0], [85.2, 740.0], [85.3, 740.0], [85.4, 740.0], [85.5, 751.0], [85.6, 751.0], [85.7, 751.0], [85.8, 751.0], [85.9, 751.0], [86.0, 755.0], [86.1, 755.0], [86.2, 755.0], [86.3, 755.0], [86.4, 755.0], [86.5, 760.0], [86.6, 760.0], [86.7, 760.0], [86.8, 760.0], [86.9, 760.0], [87.0, 761.0], [87.1, 761.0], [87.2, 761.0], [87.3, 761.0], [87.4, 761.0], [87.5, 761.0], [87.6, 761.0], [87.7, 761.0], [87.8, 761.0], [87.9, 761.0], [88.0, 761.0], [88.1, 761.0], [88.2, 761.0], [88.3, 761.0], [88.4, 761.0], [88.5, 762.0], [88.6, 762.0], [88.7, 762.0], [88.8, 762.0], [88.9, 762.0], [89.0, 763.0], [89.1, 763.0], [89.2, 763.0], [89.3, 763.0], [89.4, 763.0], [89.5, 763.0], [89.6, 763.0], [89.7, 763.0], [89.8, 763.0], [89.9, 763.0], [90.0, 766.0], [90.1, 766.0], [90.2, 766.0], [90.3, 766.0], [90.4, 766.0], [90.5, 767.0], [90.6, 767.0], [90.7, 767.0], [90.8, 767.0], [90.9, 767.0], [91.0, 767.0], [91.1, 767.0], [91.2, 767.0], [91.3, 767.0], [91.4, 767.0], [91.5, 773.0], [91.6, 773.0], [91.7, 773.0], [91.8, 773.0], [91.9, 773.0], [92.0, 774.0], [92.1, 774.0], [92.2, 774.0], [92.3, 774.0], [92.4, 774.0], [92.5, 776.0], [92.6, 776.0], [92.7, 776.0], [92.8, 776.0], [92.9, 776.0], [93.0, 780.0], [93.1, 780.0], [93.2, 780.0], [93.3, 780.0], [93.4, 780.0], [93.5, 783.0], [93.6, 783.0], [93.7, 783.0], [93.8, 783.0], [93.9, 783.0], [94.0, 792.0], [94.1, 792.0], [94.2, 792.0], [94.3, 792.0], [94.4, 792.0], [94.5, 793.0], [94.6, 793.0], [94.7, 793.0], [94.8, 793.0], [94.9, 793.0], [95.0, 803.0], [95.1, 803.0], [95.2, 803.0], [95.3, 803.0], [95.4, 803.0], [95.5, 809.0], [95.6, 809.0], [95.7, 809.0], [95.8, 809.0], [95.9, 809.0], [96.0, 819.0], [96.1, 819.0], [96.2, 819.0], [96.3, 819.0], [96.4, 819.0], [96.5, 822.0], [96.6, 822.0], [96.7, 822.0], [96.8, 822.0], [96.9, 822.0], [97.0, 1076.0], [97.1, 1076.0], [97.2, 1076.0], [97.3, 1076.0], [97.4, 1076.0], [97.5, 1304.0], [97.6, 1304.0], [97.7, 1304.0], [97.8, 1304.0], [97.9, 1304.0], [98.0, 1315.0], [98.1, 1315.0], [98.2, 1315.0], [98.3, 1315.0], [98.4, 1315.0], [98.5, 1342.0], [98.6, 1342.0], [98.7, 1342.0], [98.8, 1342.0], [98.9, 1342.0], [99.0, 1360.0], [99.1, 1360.0], [99.2, 1360.0], [99.3, 1360.0], [99.4, 1360.0], [99.5, 1412.0], [99.6, 1412.0], [99.7, 1412.0], [99.8, 1412.0], [99.9, 1412.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 77.0, "series": [{"data": [[600.0, 38.0], [1300.0, 4.0], [700.0, 29.0], [1400.0, 1.0], [200.0, 77.0], [100.0, 23.0], [800.0, 4.0], [1000.0, 1.0], [500.0, 23.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.7961165048543695, "minX": 1.77706098E12, "maxY": 5.773195876288659, "series": [{"data": [[1.77706104E12, 4.7961165048543695], [1.77706098E12, 5.773195876288659]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77706104E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 200.0, "minX": 1.0, "maxY": 502.7941176470586, "series": [{"data": [[4.0, 443.9642857142858], [8.0, 200.0], [2.0, 470.5], [1.0, 288.0], [5.0, 502.7941176470586], [6.0, 470.81690140845075], [3.0, 477.9000000000001], [7.0, 380.7368421052631]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[5.269999999999997, 467.45500000000015]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 197.23333333333332, "minX": 1.77706098E12, "maxY": 19849.233333333334, "series": [{"data": [[1.77706104E12, 19849.233333333334], [1.77706098E12, 19164.183333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77706104E12, 209.43333333333334], [1.77706098E12, 197.23333333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77706104E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 420.5242718446602, "minX": 1.77706098E12, "maxY": 517.2886597938146, "series": [{"data": [[1.77706104E12, 420.5242718446602], [1.77706098E12, 517.2886597938146]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77706104E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 378.33980582524276, "minX": 1.77706098E12, "maxY": 478.5051546391751, "series": [{"data": [[1.77706104E12, 378.33980582524276], [1.77706098E12, 478.5051546391751]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77706104E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 184.88349514563114, "minX": 1.77706098E12, "maxY": 281.5979381443297, "series": [{"data": [[1.77706104E12, 184.88349514563114], [1.77706098E12, 281.5979381443297]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77706104E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.77706098E12, "maxY": 1412.0, "series": [{"data": [[1.77706104E12, 766.0], [1.77706098E12, 1412.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77706104E12, 643.2], [1.77706098E12, 804.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77706104E12, 763.6799999999996], [1.77706098E12, 1412.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77706104E12, 666.2], [1.77706098E12, 1305.1]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77706104E12, 185.0], [1.77706098E12, 179.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77706104E12, 292.0], [1.77706098E12, 554.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77706104E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 233.0, "minX": 1.0, "maxY": 651.5, "series": [{"data": [[2.0, 651.5], [4.0, 286.5], [1.0, 233.0], [5.0, 289.0], [3.0, 553.0], [6.0, 267.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 217.0, "minX": 1.0, "maxY": 582.0, "series": [{"data": [[2.0, 582.0], [4.0, 224.0], [1.0, 217.0], [5.0, 224.0], [3.0, 536.5], [6.0, 221.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.77706098E12, "maxY": 1.7, "series": [{"data": [[1.77706104E12, 1.7], [1.77706098E12, 1.6333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77706104E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6166666666666667, "minX": 1.77706098E12, "maxY": 1.7166666666666666, "series": [{"data": [[1.77706104E12, 1.7166666666666666], [1.77706098E12, 1.6166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77706104E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6166666666666667, "minX": 1.77706098E12, "maxY": 1.7166666666666666, "series": [{"data": [[1.77706104E12, 1.7166666666666666], [1.77706098E12, 1.6166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77706104E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6166666666666667, "minX": 1.77706098E12, "maxY": 1.7166666666666666, "series": [{"data": [[1.77706104E12, 1.7166666666666666], [1.77706098E12, 1.6166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77706104E12, "title": "Total Transactions Per Second"}},
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

