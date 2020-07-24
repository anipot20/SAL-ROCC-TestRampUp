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
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 0.0, "KoPercent": 100.0};
    var dataset = [
        {
            "label" : "KO",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "OK",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.0, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0, 500, 1500, "HTTP Request"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 99, 99, 100.0, 766.1111111111114, 586, 1060, 717.0, 980.0, 1024.0, 1060.0, 72.95504789977893, 31.945899732866618, 9.61809713522476], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["HTTP Request", 99, 99, 100.0, 766.1111111111114, 586, 1060, 717.0, 980.0, 1024.0, 1060.0, 72.95504789977893, 31.945899732866618, 9.61809713522476], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 841 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 655 milliseconds, but should not have lasted longer than 50 milliseconds.", 2, 2.0202020202020203, 2.0202020202020203], "isController": false}, {"data": ["The operation lasted too long: It took 688 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 966 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 765 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 719 milliseconds, but should not have lasted longer than 50 milliseconds.", 2, 2.0202020202020203, 2.0202020202020203], "isController": false}, {"data": ["The operation lasted too long: It took 957 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 924 milliseconds, but should not have lasted longer than 50 milliseconds.", 3, 3.0303030303030303, 3.0303030303030303], "isController": false}, {"data": ["The operation lasted too long: It took 915 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 738 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 705 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 632 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 774 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 623 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 709 milliseconds, but should not have lasted longer than 50 milliseconds.", 5, 5.05050505050505, 5.05050505050505], "isController": false}, {"data": ["The operation lasted too long: It took 656 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 1,027 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 727 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 904 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 1,039 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 715 milliseconds, but should not have lasted longer than 50 milliseconds.", 2, 2.0202020202020203, 2.0202020202020203], "isController": false}, {"data": ["The operation lasted too long: It took 876 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 586 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 639 milliseconds, but should not have lasted longer than 50 milliseconds.", 2, 2.0202020202020203, 2.0202020202020203], "isController": false}, {"data": ["The operation lasted too long: It took 627 milliseconds, but should not have lasted longer than 50 milliseconds.", 2, 2.0202020202020203, 2.0202020202020203], "isController": false}, {"data": ["The operation lasted too long: It took 729 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 1,022 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 740 milliseconds, but should not have lasted longer than 50 milliseconds.", 2, 2.0202020202020203, 2.0202020202020203], "isController": false}, {"data": ["The operation lasted too long: It took 728 milliseconds, but should not have lasted longer than 50 milliseconds.", 2, 2.0202020202020203, 2.0202020202020203], "isController": false}, {"data": ["The operation lasted too long: It took 716 milliseconds, but should not have lasted longer than 50 milliseconds.", 2, 2.0202020202020203, 2.0202020202020203], "isController": false}, {"data": ["The operation lasted too long: It took 710 milliseconds, but should not have lasted longer than 50 milliseconds.", 3, 3.0303030303030303, 3.0303030303030303], "isController": false}, {"data": ["The operation lasted too long: It took 663 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 1,034 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 776 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 649 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 634 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 667 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 652 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 658 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 694 milliseconds, but should not have lasted longer than 50 milliseconds.", 2, 2.0202020202020203, 2.0202020202020203], "isController": false}, {"data": ["The operation lasted too long: It took 717 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 676 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 862 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 1,017 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 711 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 686 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 921 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 744 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 602 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 720 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 668 milliseconds, but should not have lasted longer than 50 milliseconds.", 2, 2.0202020202020203, 2.0202020202020203], "isController": false}, {"data": ["The operation lasted too long: It took 916 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 771 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 931 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 1,024 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 724 milliseconds, but should not have lasted longer than 50 milliseconds.", 2, 2.0202020202020203, 2.0202020202020203], "isController": false}, {"data": ["The operation lasted too long: It took 1,018 milliseconds, but should not have lasted longer than 50 milliseconds.", 2, 2.0202020202020203, 2.0202020202020203], "isController": false}, {"data": ["The operation lasted too long: It took 730 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 1,060 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 706 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 696 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 690 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 849 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 678 milliseconds, but should not have lasted longer than 50 milliseconds.", 2, 2.0202020202020203, 2.0202020202020203], "isController": false}, {"data": ["The operation lasted too long: It took 700 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 796 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 961 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 980 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 927 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 773 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 666 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 914 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 737 milliseconds, but should not have lasted longer than 50 milliseconds.", 2, 2.0202020202020203, 2.0202020202020203], "isController": false}, {"data": ["The operation lasted too long: It took 701 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 660 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 630 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}, {"data": ["The operation lasted too long: It took 642 milliseconds, but should not have lasted longer than 50 milliseconds.", 1, 1.0101010101010102, 1.0101010101010102], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 99, 99, "The operation lasted too long: It took 709 milliseconds, but should not have lasted longer than 50 milliseconds.", 5, "The operation lasted too long: It took 924 milliseconds, but should not have lasted longer than 50 milliseconds.", 3, "The operation lasted too long: It took 710 milliseconds, but should not have lasted longer than 50 milliseconds.", 3, "The operation lasted too long: It took 655 milliseconds, but should not have lasted longer than 50 milliseconds.", 2, "The operation lasted too long: It took 719 milliseconds, but should not have lasted longer than 50 milliseconds.", 2], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request", 99, 99, "The operation lasted too long: It took 709 milliseconds, but should not have lasted longer than 50 milliseconds.", 5, "The operation lasted too long: It took 924 milliseconds, but should not have lasted longer than 50 milliseconds.", 3, "The operation lasted too long: It took 710 milliseconds, but should not have lasted longer than 50 milliseconds.", 3, "The operation lasted too long: It took 655 milliseconds, but should not have lasted longer than 50 milliseconds.", 2, "The operation lasted too long: It took 719 milliseconds, but should not have lasted longer than 50 milliseconds.", 2], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
