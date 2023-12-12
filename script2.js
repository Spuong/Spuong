 $(document).ready(function(){
            for (var i = 1; i <= 6; i++) {
                $('#myTable tbody').append('<tr><td><button class="btn">Button ' + i + '</button></td><td>1</td><td>2</td><td>3</td></tr>');
            }
            $('.btn').click(function() {
                var rowNumber = $(this).closest('tr').index() + 1;
                alert('Press botton in line ' + rowNumber);
            });
        });