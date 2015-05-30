package DDG::Spice::PirateSpeak;
# ABSTRACT: Returns normal speech as pirate speech.

use DDG::Spice;

triggers startend => 'piratespeak', 'pirate speak';

spice to => 'http://isithackday.com/arrpi.php?text=$1&format=json&callback={{callback}}';

handle remainder => sub {
	return $_ if $_;
	return;
};
1;
