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
        data: {"result": {"minY": 586.0, "minX": 0.0, "maxY": 1060.0, "series": [{"data": [[0.0, 586.0], [0.1, 586.0], [0.2, 586.0], [0.3, 586.0], [0.4, 586.0], [0.5, 586.0], [0.6, 586.0], [0.7, 586.0], [0.8, 586.0], [0.9, 586.0], [1.0, 586.0], [1.1, 602.0], [1.2, 602.0], [1.3, 602.0], [1.4, 602.0], [1.5, 602.0], [1.6, 602.0], [1.7, 602.0], [1.8, 602.0], [1.9, 602.0], [2.0, 602.0], [2.1, 623.0], [2.2, 623.0], [2.3, 623.0], [2.4, 623.0], [2.5, 623.0], [2.6, 623.0], [2.7, 623.0], [2.8, 623.0], [2.9, 623.0], [3.0, 623.0], [3.1, 627.0], [3.2, 627.0], [3.3, 627.0], [3.4, 627.0], [3.5, 627.0], [3.6, 627.0], [3.7, 627.0], [3.8, 627.0], [3.9, 627.0], [4.0, 627.0], [4.1, 627.0], [4.2, 627.0], [4.3, 627.0], [4.4, 627.0], [4.5, 627.0], [4.6, 627.0], [4.7, 627.0], [4.8, 627.0], [4.9, 627.0], [5.0, 627.0], [5.1, 630.0], [5.2, 630.0], [5.3, 630.0], [5.4, 630.0], [5.5, 630.0], [5.6, 630.0], [5.7, 630.0], [5.8, 630.0], [5.9, 630.0], [6.0, 630.0], [6.1, 632.0], [6.2, 632.0], [6.3, 632.0], [6.4, 632.0], [6.5, 632.0], [6.6, 632.0], [6.7, 632.0], [6.8, 632.0], [6.9, 632.0], [7.0, 632.0], [7.1, 634.0], [7.2, 634.0], [7.3, 634.0], [7.4, 634.0], [7.5, 634.0], [7.6, 634.0], [7.7, 634.0], [7.8, 634.0], [7.9, 634.0], [8.0, 634.0], [8.1, 639.0], [8.2, 639.0], [8.3, 639.0], [8.4, 639.0], [8.5, 639.0], [8.6, 639.0], [8.7, 639.0], [8.8, 639.0], [8.9, 639.0], [9.0, 639.0], [9.1, 639.0], [9.2, 639.0], [9.3, 639.0], [9.4, 639.0], [9.5, 639.0], [9.6, 639.0], [9.7, 639.0], [9.8, 639.0], [9.9, 639.0], [10.0, 639.0], [10.1, 639.0], [10.2, 642.0], [10.3, 642.0], [10.4, 642.0], [10.5, 642.0], [10.6, 642.0], [10.7, 642.0], [10.8, 642.0], [10.9, 642.0], [11.0, 642.0], [11.1, 642.0], [11.2, 649.0], [11.3, 649.0], [11.4, 649.0], [11.5, 649.0], [11.6, 649.0], [11.7, 649.0], [11.8, 649.0], [11.9, 649.0], [12.0, 649.0], [12.1, 649.0], [12.2, 652.0], [12.3, 652.0], [12.4, 652.0], [12.5, 652.0], [12.6, 652.0], [12.7, 652.0], [12.8, 652.0], [12.9, 652.0], [13.0, 652.0], [13.1, 652.0], [13.2, 655.0], [13.3, 655.0], [13.4, 655.0], [13.5, 655.0], [13.6, 655.0], [13.7, 655.0], [13.8, 655.0], [13.9, 655.0], [14.0, 655.0], [14.1, 655.0], [14.2, 655.0], [14.3, 655.0], [14.4, 655.0], [14.5, 655.0], [14.6, 655.0], [14.7, 655.0], [14.8, 655.0], [14.9, 655.0], [15.0, 655.0], [15.1, 655.0], [15.2, 656.0], [15.3, 656.0], [15.4, 656.0], [15.5, 656.0], [15.6, 656.0], [15.7, 656.0], [15.8, 656.0], [15.9, 656.0], [16.0, 656.0], [16.1, 656.0], [16.2, 658.0], [16.3, 658.0], [16.4, 658.0], [16.5, 658.0], [16.6, 658.0], [16.7, 658.0], [16.8, 658.0], [16.9, 658.0], [17.0, 658.0], [17.1, 658.0], [17.2, 660.0], [17.3, 660.0], [17.4, 660.0], [17.5, 660.0], [17.6, 660.0], [17.7, 660.0], [17.8, 660.0], [17.9, 660.0], [18.0, 660.0], [18.1, 660.0], [18.2, 663.0], [18.3, 663.0], [18.4, 663.0], [18.5, 663.0], [18.6, 663.0], [18.7, 663.0], [18.8, 663.0], [18.9, 663.0], [19.0, 663.0], [19.1, 663.0], [19.2, 666.0], [19.3, 666.0], [19.4, 666.0], [19.5, 666.0], [19.6, 666.0], [19.7, 666.0], [19.8, 666.0], [19.9, 666.0], [20.0, 666.0], [20.1, 666.0], [20.2, 666.0], [20.3, 667.0], [20.4, 667.0], [20.5, 667.0], [20.6, 667.0], [20.7, 667.0], [20.8, 667.0], [20.9, 667.0], [21.0, 667.0], [21.1, 667.0], [21.2, 667.0], [21.3, 668.0], [21.4, 668.0], [21.5, 668.0], [21.6, 668.0], [21.7, 668.0], [21.8, 668.0], [21.9, 668.0], [22.0, 668.0], [22.1, 668.0], [22.2, 668.0], [22.3, 668.0], [22.4, 668.0], [22.5, 668.0], [22.6, 668.0], [22.7, 668.0], [22.8, 668.0], [22.9, 668.0], [23.0, 668.0], [23.1, 668.0], [23.2, 668.0], [23.3, 676.0], [23.4, 676.0], [23.5, 676.0], [23.6, 676.0], [23.7, 676.0], [23.8, 676.0], [23.9, 676.0], [24.0, 676.0], [24.1, 676.0], [24.2, 676.0], [24.3, 678.0], [24.4, 678.0], [24.5, 678.0], [24.6, 678.0], [24.7, 678.0], [24.8, 678.0], [24.9, 678.0], [25.0, 678.0], [25.1, 678.0], [25.2, 678.0], [25.3, 678.0], [25.4, 678.0], [25.5, 678.0], [25.6, 678.0], [25.7, 678.0], [25.8, 678.0], [25.9, 678.0], [26.0, 678.0], [26.1, 678.0], [26.2, 678.0], [26.3, 686.0], [26.4, 686.0], [26.5, 686.0], [26.6, 686.0], [26.7, 686.0], [26.8, 686.0], [26.9, 686.0], [27.0, 686.0], [27.1, 686.0], [27.2, 686.0], [27.3, 688.0], [27.4, 688.0], [27.5, 688.0], [27.6, 688.0], [27.7, 688.0], [27.8, 688.0], [27.9, 688.0], [28.0, 688.0], [28.1, 688.0], [28.2, 688.0], [28.3, 690.0], [28.4, 690.0], [28.5, 690.0], [28.6, 690.0], [28.7, 690.0], [28.8, 690.0], [28.9, 690.0], [29.0, 690.0], [29.1, 690.0], [29.2, 690.0], [29.3, 694.0], [29.4, 694.0], [29.5, 694.0], [29.6, 694.0], [29.7, 694.0], [29.8, 694.0], [29.9, 694.0], [30.0, 694.0], [30.1, 694.0], [30.2, 694.0], [30.3, 694.0], [30.4, 694.0], [30.5, 694.0], [30.6, 694.0], [30.7, 694.0], [30.8, 694.0], [30.9, 694.0], [31.0, 694.0], [31.1, 694.0], [31.2, 694.0], [31.3, 694.0], [31.4, 696.0], [31.5, 696.0], [31.6, 696.0], [31.7, 696.0], [31.8, 696.0], [31.9, 696.0], [32.0, 696.0], [32.1, 696.0], [32.2, 696.0], [32.3, 696.0], [32.4, 700.0], [32.5, 700.0], [32.6, 700.0], [32.7, 700.0], [32.8, 700.0], [32.9, 700.0], [33.0, 700.0], [33.1, 700.0], [33.2, 700.0], [33.3, 700.0], [33.4, 701.0], [33.5, 701.0], [33.6, 701.0], [33.7, 701.0], [33.8, 701.0], [33.9, 701.0], [34.0, 701.0], [34.1, 701.0], [34.2, 701.0], [34.3, 701.0], [34.4, 705.0], [34.5, 705.0], [34.6, 705.0], [34.7, 705.0], [34.8, 705.0], [34.9, 705.0], [35.0, 705.0], [35.1, 705.0], [35.2, 705.0], [35.3, 705.0], [35.4, 706.0], [35.5, 706.0], [35.6, 706.0], [35.7, 706.0], [35.8, 706.0], [35.9, 706.0], [36.0, 706.0], [36.1, 706.0], [36.2, 706.0], [36.3, 706.0], [36.4, 709.0], [36.5, 709.0], [36.6, 709.0], [36.7, 709.0], [36.8, 709.0], [36.9, 709.0], [37.0, 709.0], [37.1, 709.0], [37.2, 709.0], [37.3, 709.0], [37.4, 709.0], [37.5, 709.0], [37.6, 709.0], [37.7, 709.0], [37.8, 709.0], [37.9, 709.0], [38.0, 709.0], [38.1, 709.0], [38.2, 709.0], [38.3, 709.0], [38.4, 709.0], [38.5, 709.0], [38.6, 709.0], [38.7, 709.0], [38.8, 709.0], [38.9, 709.0], [39.0, 709.0], [39.1, 709.0], [39.2, 709.0], [39.3, 709.0], [39.4, 709.0], [39.5, 709.0], [39.6, 709.0], [39.7, 709.0], [39.8, 709.0], [39.9, 709.0], [40.0, 709.0], [40.1, 709.0], [40.2, 709.0], [40.3, 709.0], [40.4, 709.0], [40.5, 709.0], [40.6, 709.0], [40.7, 709.0], [40.8, 709.0], [40.9, 709.0], [41.0, 709.0], [41.1, 709.0], [41.2, 709.0], [41.3, 709.0], [41.4, 709.0], [41.5, 710.0], [41.6, 710.0], [41.7, 710.0], [41.8, 710.0], [41.9, 710.0], [42.0, 710.0], [42.1, 710.0], [42.2, 710.0], [42.3, 710.0], [42.4, 710.0], [42.5, 710.0], [42.6, 710.0], [42.7, 710.0], [42.8, 710.0], [42.9, 710.0], [43.0, 710.0], [43.1, 710.0], [43.2, 710.0], [43.3, 710.0], [43.4, 710.0], [43.5, 710.0], [43.6, 710.0], [43.7, 710.0], [43.8, 710.0], [43.9, 710.0], [44.0, 710.0], [44.1, 710.0], [44.2, 710.0], [44.3, 710.0], [44.4, 710.0], [44.5, 711.0], [44.6, 711.0], [44.7, 711.0], [44.8, 711.0], [44.9, 711.0], [45.0, 711.0], [45.1, 711.0], [45.2, 711.0], [45.3, 711.0], [45.4, 711.0], [45.5, 715.0], [45.6, 715.0], [45.7, 715.0], [45.8, 715.0], [45.9, 715.0], [46.0, 715.0], [46.1, 715.0], [46.2, 715.0], [46.3, 715.0], [46.4, 715.0], [46.5, 715.0], [46.6, 715.0], [46.7, 715.0], [46.8, 715.0], [46.9, 715.0], [47.0, 715.0], [47.1, 715.0], [47.2, 715.0], [47.3, 715.0], [47.4, 715.0], [47.5, 716.0], [47.6, 716.0], [47.7, 716.0], [47.8, 716.0], [47.9, 716.0], [48.0, 716.0], [48.1, 716.0], [48.2, 716.0], [48.3, 716.0], [48.4, 716.0], [48.5, 716.0], [48.6, 716.0], [48.7, 716.0], [48.8, 716.0], [48.9, 716.0], [49.0, 716.0], [49.1, 716.0], [49.2, 716.0], [49.3, 716.0], [49.4, 716.0], [49.5, 717.0], [49.6, 717.0], [49.7, 717.0], [49.8, 717.0], [49.9, 717.0], [50.0, 717.0], [50.1, 717.0], [50.2, 717.0], [50.3, 717.0], [50.4, 717.0], [50.5, 717.0], [50.6, 719.0], [50.7, 719.0], [50.8, 719.0], [50.9, 719.0], [51.0, 719.0], [51.1, 719.0], [51.2, 719.0], [51.3, 719.0], [51.4, 719.0], [51.5, 719.0], [51.6, 719.0], [51.7, 719.0], [51.8, 719.0], [51.9, 719.0], [52.0, 719.0], [52.1, 719.0], [52.2, 719.0], [52.3, 719.0], [52.4, 719.0], [52.5, 719.0], [52.6, 720.0], [52.7, 720.0], [52.8, 720.0], [52.9, 720.0], [53.0, 720.0], [53.1, 720.0], [53.2, 720.0], [53.3, 720.0], [53.4, 720.0], [53.5, 720.0], [53.6, 724.0], [53.7, 724.0], [53.8, 724.0], [53.9, 724.0], [54.0, 724.0], [54.1, 724.0], [54.2, 724.0], [54.3, 724.0], [54.4, 724.0], [54.5, 724.0], [54.6, 724.0], [54.7, 724.0], [54.8, 724.0], [54.9, 724.0], [55.0, 724.0], [55.1, 724.0], [55.2, 724.0], [55.3, 724.0], [55.4, 724.0], [55.5, 724.0], [55.6, 727.0], [55.7, 727.0], [55.8, 727.0], [55.9, 727.0], [56.0, 727.0], [56.1, 727.0], [56.2, 727.0], [56.3, 727.0], [56.4, 727.0], [56.5, 727.0], [56.6, 728.0], [56.7, 728.0], [56.8, 728.0], [56.9, 728.0], [57.0, 728.0], [57.1, 728.0], [57.2, 728.0], [57.3, 728.0], [57.4, 728.0], [57.5, 728.0], [57.6, 728.0], [57.7, 728.0], [57.8, 728.0], [57.9, 728.0], [58.0, 728.0], [58.1, 728.0], [58.2, 728.0], [58.3, 728.0], [58.4, 728.0], [58.5, 728.0], [58.6, 729.0], [58.7, 729.0], [58.8, 729.0], [58.9, 729.0], [59.0, 729.0], [59.1, 729.0], [59.2, 729.0], [59.3, 729.0], [59.4, 729.0], [59.5, 729.0], [59.6, 730.0], [59.7, 730.0], [59.8, 730.0], [59.9, 730.0], [60.0, 730.0], [60.1, 730.0], [60.2, 730.0], [60.3, 730.0], [60.4, 730.0], [60.5, 730.0], [60.6, 730.0], [60.7, 737.0], [60.8, 737.0], [60.9, 737.0], [61.0, 737.0], [61.1, 737.0], [61.2, 737.0], [61.3, 737.0], [61.4, 737.0], [61.5, 737.0], [61.6, 737.0], [61.7, 737.0], [61.8, 737.0], [61.9, 737.0], [62.0, 737.0], [62.1, 737.0], [62.2, 737.0], [62.3, 737.0], [62.4, 737.0], [62.5, 737.0], [62.6, 737.0], [62.7, 738.0], [62.8, 738.0], [62.9, 738.0], [63.0, 738.0], [63.1, 738.0], [63.2, 738.0], [63.3, 738.0], [63.4, 738.0], [63.5, 738.0], [63.6, 738.0], [63.7, 740.0], [63.8, 740.0], [63.9, 740.0], [64.0, 740.0], [64.1, 740.0], [64.2, 740.0], [64.3, 740.0], [64.4, 740.0], [64.5, 740.0], [64.6, 740.0], [64.7, 740.0], [64.8, 740.0], [64.9, 740.0], [65.0, 740.0], [65.1, 740.0], [65.2, 740.0], [65.3, 740.0], [65.4, 740.0], [65.5, 740.0], [65.6, 740.0], [65.7, 744.0], [65.8, 744.0], [65.9, 744.0], [66.0, 744.0], [66.1, 744.0], [66.2, 744.0], [66.3, 744.0], [66.4, 744.0], [66.5, 744.0], [66.6, 744.0], [66.7, 765.0], [66.8, 765.0], [66.9, 765.0], [67.0, 765.0], [67.1, 765.0], [67.2, 765.0], [67.3, 765.0], [67.4, 765.0], [67.5, 765.0], [67.6, 765.0], [67.7, 771.0], [67.8, 771.0], [67.9, 771.0], [68.0, 771.0], [68.1, 771.0], [68.2, 771.0], [68.3, 771.0], [68.4, 771.0], [68.5, 771.0], [68.6, 771.0], [68.7, 773.0], [68.8, 773.0], [68.9, 773.0], [69.0, 773.0], [69.1, 773.0], [69.2, 773.0], [69.3, 773.0], [69.4, 773.0], [69.5, 773.0], [69.6, 773.0], [69.7, 774.0], [69.8, 774.0], [69.9, 774.0], [70.0, 774.0], [70.1, 774.0], [70.2, 774.0], [70.3, 774.0], [70.4, 774.0], [70.5, 774.0], [70.6, 774.0], [70.7, 774.0], [70.8, 776.0], [70.9, 776.0], [71.0, 776.0], [71.1, 776.0], [71.2, 776.0], [71.3, 776.0], [71.4, 776.0], [71.5, 776.0], [71.6, 776.0], [71.7, 776.0], [71.8, 796.0], [71.9, 796.0], [72.0, 796.0], [72.1, 796.0], [72.2, 796.0], [72.3, 796.0], [72.4, 796.0], [72.5, 796.0], [72.6, 796.0], [72.7, 796.0], [72.8, 841.0], [72.9, 841.0], [73.0, 841.0], [73.1, 841.0], [73.2, 841.0], [73.3, 841.0], [73.4, 841.0], [73.5, 841.0], [73.6, 841.0], [73.7, 841.0], [73.8, 849.0], [73.9, 849.0], [74.0, 849.0], [74.1, 849.0], [74.2, 849.0], [74.3, 849.0], [74.4, 849.0], [74.5, 849.0], [74.6, 849.0], [74.7, 849.0], [74.8, 862.0], [74.9, 862.0], [75.0, 862.0], [75.1, 862.0], [75.2, 862.0], [75.3, 862.0], [75.4, 862.0], [75.5, 862.0], [75.6, 862.0], [75.7, 862.0], [75.8, 876.0], [75.9, 876.0], [76.0, 876.0], [76.1, 876.0], [76.2, 876.0], [76.3, 876.0], [76.4, 876.0], [76.5, 876.0], [76.6, 876.0], [76.7, 876.0], [76.8, 904.0], [76.9, 904.0], [77.0, 904.0], [77.1, 904.0], [77.2, 904.0], [77.3, 904.0], [77.4, 904.0], [77.5, 904.0], [77.6, 904.0], [77.7, 904.0], [77.8, 914.0], [77.9, 914.0], [78.0, 914.0], [78.1, 914.0], [78.2, 914.0], [78.3, 914.0], [78.4, 914.0], [78.5, 914.0], [78.6, 914.0], [78.7, 914.0], [78.8, 915.0], [78.9, 915.0], [79.0, 915.0], [79.1, 915.0], [79.2, 915.0], [79.3, 915.0], [79.4, 915.0], [79.5, 915.0], [79.6, 915.0], [79.7, 915.0], [79.8, 916.0], [79.9, 916.0], [80.0, 916.0], [80.1, 916.0], [80.2, 916.0], [80.3, 916.0], [80.4, 916.0], [80.5, 916.0], [80.6, 916.0], [80.7, 916.0], [80.8, 916.0], [80.9, 921.0], [81.0, 921.0], [81.1, 921.0], [81.2, 921.0], [81.3, 921.0], [81.4, 921.0], [81.5, 921.0], [81.6, 921.0], [81.7, 921.0], [81.8, 921.0], [81.9, 924.0], [82.0, 924.0], [82.1, 924.0], [82.2, 924.0], [82.3, 924.0], [82.4, 924.0], [82.5, 924.0], [82.6, 924.0], [82.7, 924.0], [82.8, 924.0], [82.9, 924.0], [83.0, 924.0], [83.1, 924.0], [83.2, 924.0], [83.3, 924.0], [83.4, 924.0], [83.5, 924.0], [83.6, 924.0], [83.7, 924.0], [83.8, 924.0], [83.9, 924.0], [84.0, 924.0], [84.1, 924.0], [84.2, 924.0], [84.3, 924.0], [84.4, 924.0], [84.5, 924.0], [84.6, 924.0], [84.7, 924.0], [84.8, 924.0], [84.9, 927.0], [85.0, 927.0], [85.1, 927.0], [85.2, 927.0], [85.3, 927.0], [85.4, 927.0], [85.5, 927.0], [85.6, 927.0], [85.7, 927.0], [85.8, 927.0], [85.9, 931.0], [86.0, 931.0], [86.1, 931.0], [86.2, 931.0], [86.3, 931.0], [86.4, 931.0], [86.5, 931.0], [86.6, 931.0], [86.7, 931.0], [86.8, 931.0], [86.9, 957.0], [87.0, 957.0], [87.1, 957.0], [87.2, 957.0], [87.3, 957.0], [87.4, 957.0], [87.5, 957.0], [87.6, 957.0], [87.7, 957.0], [87.8, 957.0], [87.9, 961.0], [88.0, 961.0], [88.1, 961.0], [88.2, 961.0], [88.3, 961.0], [88.4, 961.0], [88.5, 961.0], [88.6, 961.0], [88.7, 961.0], [88.8, 961.0], [88.9, 966.0], [89.0, 966.0], [89.1, 966.0], [89.2, 966.0], [89.3, 966.0], [89.4, 966.0], [89.5, 966.0], [89.6, 966.0], [89.7, 966.0], [89.8, 966.0], [89.9, 980.0], [90.0, 980.0], [90.1, 980.0], [90.2, 980.0], [90.3, 980.0], [90.4, 980.0], [90.5, 980.0], [90.6, 980.0], [90.7, 980.0], [90.8, 980.0], [90.9, 980.0], [91.0, 1017.0], [91.1, 1017.0], [91.2, 1017.0], [91.3, 1017.0], [91.4, 1017.0], [91.5, 1017.0], [91.6, 1017.0], [91.7, 1017.0], [91.8, 1017.0], [91.9, 1017.0], [92.0, 1018.0], [92.1, 1018.0], [92.2, 1018.0], [92.3, 1018.0], [92.4, 1018.0], [92.5, 1018.0], [92.6, 1018.0], [92.7, 1018.0], [92.8, 1018.0], [92.9, 1018.0], [93.0, 1018.0], [93.1, 1018.0], [93.2, 1018.0], [93.3, 1018.0], [93.4, 1018.0], [93.5, 1018.0], [93.6, 1018.0], [93.7, 1018.0], [93.8, 1018.0], [93.9, 1018.0], [94.0, 1022.0], [94.1, 1022.0], [94.2, 1022.0], [94.3, 1022.0], [94.4, 1022.0], [94.5, 1022.0], [94.6, 1022.0], [94.7, 1022.0], [94.8, 1022.0], [94.9, 1022.0], [95.0, 1024.0], [95.1, 1024.0], [95.2, 1024.0], [95.3, 1024.0], [95.4, 1024.0], [95.5, 1024.0], [95.6, 1024.0], [95.7, 1024.0], [95.8, 1024.0], [95.9, 1024.0], [96.0, 1027.0], [96.1, 1027.0], [96.2, 1027.0], [96.3, 1027.0], [96.4, 1027.0], [96.5, 1027.0], [96.6, 1027.0], [96.7, 1027.0], [96.8, 1027.0], [96.9, 1027.0], [97.0, 1034.0], [97.1, 1034.0], [97.2, 1034.0], [97.3, 1034.0], [97.4, 1034.0], [97.5, 1034.0], [97.6, 1034.0], [97.7, 1034.0], [97.8, 1034.0], [97.9, 1034.0], [98.0, 1039.0], [98.1, 1039.0], [98.2, 1039.0], [98.3, 1039.0], [98.4, 1039.0], [98.5, 1039.0], [98.6, 1039.0], [98.7, 1039.0], [98.8, 1039.0], [98.9, 1039.0], [99.0, 1060.0], [99.1, 1060.0], [99.2, 1060.0], [99.3, 1060.0], [99.4, 1060.0], [99.5, 1060.0], [99.6, 1060.0], [99.7, 1060.0], [99.8, 1060.0], [99.9, 1060.0], [100.0, 1060.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 40.0, "series": [{"data": [[600.0, 31.0], [700.0, 40.0], [800.0, 4.0], [900.0, 14.0], [500.0, 1.0], [1000.0, 9.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 99.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 99.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 99.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.95959595959595, "minX": 1.59403116E12, "maxY": 49.95959595959595, "series": [{"data": [[1.59403116E12, 49.95959595959595]], "isOverall": false, "label": "APIDemo", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59403116E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
        data: {"result": {"minY": 602.0, "minX": 1.0, "maxY": 1060.0, "series": [{"data": [[2.0, 634.0], [3.0, 630.0], [4.0, 627.0], [5.0, 639.0], [6.0, 627.0], [7.0, 632.0], [8.0, 639.0], [9.0, 642.0], [10.0, 652.0], [11.0, 649.0], [12.0, 655.0], [13.0, 656.0], [14.0, 658.0], [15.0, 655.0], [16.0, 663.0], [17.0, 660.0], [18.0, 668.0], [19.0, 666.0], [20.0, 668.0], [21.0, 676.0], [22.0, 678.0], [23.0, 678.0], [24.0, 686.0], [25.0, 688.0], [26.0, 694.0], [27.0, 690.0], [28.0, 694.0], [29.0, 696.0], [30.0, 701.0], [31.0, 706.0], [33.0, 719.0], [32.0, 709.0], [35.0, 720.0], [34.0, 719.0], [37.0, 715.0], [36.0, 711.0], [39.0, 738.0], [38.0, 737.0], [41.0, 730.0], [40.0, 728.0], [43.0, 728.0], [42.0, 724.0], [45.0, 740.0], [44.0, 724.0], [47.0, 740.0], [46.0, 727.0], [49.0, 765.0], [48.0, 771.0], [51.0, 1039.0], [50.0, 1060.0], [53.0, 1024.0], [52.0, 1034.0], [55.0, 1022.0], [54.0, 1018.0], [57.0, 1027.0], [56.0, 1018.0], [59.0, 931.0], [58.0, 1017.0], [61.0, 914.0], [60.0, 924.0], [63.0, 927.0], [62.0, 924.0], [67.0, 921.0], [66.0, 924.0], [65.0, 980.0], [64.0, 916.0], [71.0, 957.0], [70.0, 961.0], [69.0, 915.0], [68.0, 966.0], [75.0, 841.0], [74.0, 849.0], [73.0, 904.0], [72.0, 862.0], [79.0, 710.0], [78.0, 709.0], [77.0, 705.0], [76.0, 700.0], [83.0, 709.0], [82.0, 710.0], [81.0, 710.0], [80.0, 709.0], [87.0, 716.0], [86.0, 717.0], [85.0, 715.0], [84.0, 709.0], [91.0, 796.0], [90.0, 729.0], [89.0, 744.0], [88.0, 716.0], [95.0, 731.0], [94.0, 773.0], [93.0, 774.0], [92.0, 776.0], [98.0, 602.0], [97.0, 667.0], [96.0, 737.0], [1.0, 623.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.95959595959595, 766.1111111111114]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 98.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 222.75, "minX": 1.59403116E12, "maxY": 739.85, "series": [{"data": [[1.59403116E12, 739.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59403116E12, 222.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59403116E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
        data: {"result": {"minY": 766.1111111111114, "minX": 1.59403116E12, "maxY": 766.1111111111114, "series": [{"data": [[1.59403116E12, 766.1111111111114]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59403116E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
        data: {"result": {"minY": 766.060606060606, "minX": 1.59403116E12, "maxY": 766.060606060606, "series": [{"data": [[1.59403116E12, 766.060606060606]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59403116E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
        data: {"result": {"minY": 72.34343434343435, "minX": 1.59403116E12, "maxY": 72.34343434343435, "series": [{"data": [[1.59403116E12, 72.34343434343435]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59403116E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
    data: {"result": {"minY": 717.0, "minX": 99.0, "maxY": 717.0, "series": [{"data": [[99.0, 717.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 99.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 717.0, "minX": 99.0, "maxY": 717.0, "series": [{"data": [[99.0, 717.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 99.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.65, "minX": 1.59403116E12, "maxY": 1.65, "series": [{"data": [[1.59403116E12, 1.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59403116E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
        data: {"result": {"minY": 1.65, "minX": 1.59403116E12, "maxY": 1.65, "series": [{"data": [[1.59403116E12, 1.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59403116E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
        data: {"result": {"minY": 1.65, "minX": 1.59403116E12, "maxY": 1.65, "series": [{"data": [[1.59403116E12, 1.65]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59403116E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
        data: {"result": {"minY": 1.65, "minX": 1.59403116E12, "maxY": 1.65, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.59403116E12, 1.65]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59403116E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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

