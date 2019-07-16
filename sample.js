$(document).ready(function() {
    let average = 0;

    function get_Atributes() {
        let subject_points = [Number($('#national_language').val()),
            Number($('#english').val()),
            Number($('#mathematics').val()),
            Number($('#science').val()),
            Number($('#society').val())
        ];
        return subject_points;
    }

    function score_indicate() {
        // By making such a description, in the variable called subject_points
        // You can create an array of [language score, English score, math score, science score, society score].
        let subject_points = get_Atributes();

        // Furthermore, by making such a description, the total point is output to the right part: "total point:"
        let sum = subject_points[0];
        sum = sum + subject_points[1];
        sum = sum + subject_points[2];
        sum = sum + subject_points[3];
        sum = sum + subject_points[4];
        average = sum / 5;
        $("#sum_indicate").text(sum);
        $("#avarage_indicate").text(average);

        // write the process to output the average point referring to the above here
    };


    function get_achievement() {

        // Write a process to output a string of rank values ("A" if the average score is 80 or more, "B" if it is 60 or more, "C" if it is 40 or more, "D" if it is less than 40)

        if (average >= 80) {
            return "A";
        } else if (average >= 60) {
            return "B";
        } else if (average >= 40) {
            return "c";
        } else {
            return "D";
        }

    }

    function get_pass_or_failure() {
        let points = get_Atributes();
        let judge = "passed";
        for (i = 0; i < points.length; i++) {
            if (points[i] < 60) {
                judge = "failed";
                break;
            }
        }
        return judge;
    }

    function judgement() {
        let achievement = get_achievement();
        let pass_or_failure = get_pass_or_failure();
        // By writing the following, if you click the button of "final judge", "Your grade is (the value of" rank "is put here). A process is implemented in which a light blue balloon with the text “(The value of“ judgment ”) is is output.
        $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grade is  ${achievement}. You ${pass_or_failure} </label>`);
    };

    $('#national_language, #english, #mathematics, #science, #society').change(function() {
        score_indicate();
    });

    $('#btn-evaluation').click(function() {
        $('#evaluation').text(get_achievement());
    });

    $('#btn-judge').click(function() {
        $('#judge').text(get_pass_or_failure());
    });

    $('#btn-declaration').click(function() {
        judgement();
    });
});
// This JS is written here as a template, so you may implement without following the written description, if you want.
// Any implementation will pass if it meets the requirements and the code quality is determined to be at a certain level.
// In the example, both JavaScript and Jquery are used, but it does not matter if they are unified.