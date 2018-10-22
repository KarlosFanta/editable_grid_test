# editable_grid_test
EditableGridFromTipocode.com

Hi
I'm trying to get the example to work, so far the table is showing contents when I added data manually on phpMyAdmin.
I can;t edit the fields yet. 
Who can help me?

SQL code:
CREATE TABLE IF NOT EXISTS `editable_grid` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `text_field` varchar(255) NOT NULL,
  `checkbox_field` int(3) NOT NULL DEFAULT '0',
  `checkbox_field_1` int(3) NOT NULL DEFAULT '0',
  `list_field` varchar(255) NOT NULL,
  `textarea_field` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

INSERT INTO `editable_grid` (`id`, `text_field`, `checkbox_field`, `checkbox_field_1`, `list_field`, `textarea_field`) VALUES
(1, 'test', 0, 0, '', 'testing');


Thanks
KarlosFanta
