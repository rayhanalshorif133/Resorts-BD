$(() => {
    handleClickSearchDestination();
    handleClickSelectDateRange();
});

const handleClickSelectDateRange = () => {
    const currentDate = moment().format('MM/DD/YYYY');
    const after2Days = moment().add(2, 'days').format('MM/DD/YYYY');
    

    function cb(start, end) {
        const startDate = moment(start).format(`DD MMM'YY`);
        const endDate = moment(end).format(`DD MMM'YY`);
        const startSpan = `
        <div>  
              <h5 class="text-sm text-resort-secondary-light font-rubik">Check-in</h5>
                <div class="border-b border-resort-secondary cursor-pointer checkDateRangeInput">
                  <input id="start_date_value" name="start_date_value" class="w-fit font-rubik text-black font-bold text-2xl focus:outline-none"
                    value="${startDate}" />
                  <p class="text-base text-resort-secondary font-medium font-rubik">Thursday</p>
                </div>
        </div>
        <div>
                <h5 class="text-sm text-resort-secondary-light font-rubik">Check-out</h5>
                <div class="border-b border-resort-secondary cursor-pointer checkDateRangeInput">
                  <input id="end_date_value" name="end_date_value" class="w-fit font-rubik text-black font-bold text-2xl focus:outline-none"
                    value="${endDate}" />
                  <p class="text-base text-resort-secondary font-medium font-rubik">Thursday</p>
                </div>
            </div>
        `;
        // start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY')
        $('#reportrange span').html(startSpan);
    }

    $('#reportrange').daterangepicker({
        currentDate: currentDate,
        after2Days: after2Days,
    }, cb);

    cb(currentDate, after2Days);

};

const handleClickSearchDestination = () => {
    $(".search_destination").click(function () {
        $(".search_destination_main").addClass('hidden');
        $(".search_destination_form").removeClass('hidden');
        $(".search_destination").focus();
    });

    $(".search_destination").keyup(function () {
        const value = $(this).val().toLowerCase();
        $(".destination_option").each(function () {
            const text = $(this).text().toLowerCase();
            if (text.search(value) > -1) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
    });

    $(".return_main_destination_form").click(function () {
        $(".search_destination_form").addClass('hidden');
        $(".select_date_form").addClass('hidden');
        $(".search_destination_main").removeClass('hidden');
    });

    $(".destination_option").click(function () {
        $(".search_destination_form").addClass('hidden');
        $(".search_destination_main").removeClass('hidden');
        const value = $(this).find('option').val();
        $(".search_destination").val(value).addClass('text-xl font-semibold');
    });
};