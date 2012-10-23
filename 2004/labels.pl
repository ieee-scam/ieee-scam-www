# LaTeX2HTML 2K.1beta (1.61)
# Associate labels original text with physical files.


$key = q/sec:submission/;
$external_labels{$key} = "$URL/" . q|Paper_Submission_Informatio_ct.html|; 
$noresave{$key} = "$nosave";

$key = q/sec:dates/;
$external_labels{$key} = "$URL/" . q|Important_Dates_ct.html|; 
$noresave{$key} = "$nosave";

$key = q/sec:program/;
$external_labels{$key} = "$URL/" . q|Technical_Program_ct.html|; 
$noresave{$key} = "$nosave";

$key = q/sec:accepted/;
$external_labels{$key} = "$URL/" . q|Accepted_Papers_ct.html|; 
$noresave{$key} = "$nosave";

$key = q/sec:registration/;
$external_labels{$key} = "$URL/" . q|Registration_ct.html|; 
$noresave{$key} = "$nosave";

1;


# LaTeX2HTML 2K.1beta (1.61)
# labels from external_latex_labels array.


$key = q/sec:submission/;
$external_latex_labels{$key} = q|5|; 
$noresave{$key} = "$nosave";

$key = q/sec:dates/;
$external_latex_labels{$key} = q|6.4|; 
$noresave{$key} = "$nosave";

$key = q/sec:program/;
$external_latex_labels{$key} = q|7|; 
$noresave{$key} = "$nosave";

$key = q/sec:accepted/;
$external_latex_labels{$key} = q|9|; 
$noresave{$key} = "$nosave";

$key = q/sec:registration/;
$external_latex_labels{$key} = q|8|; 
$noresave{$key} = "$nosave";

1;

