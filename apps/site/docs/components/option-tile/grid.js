import { useState } from 'react';
import { Box } from "@rhino-ui/components/src/components/box/box";
import { OptionTile } from "@rhino-ui/components/src/components/option-tile/option-tile";

export default function Grid() {
    const [selectedOption, setSelectedOption] = useState(null);
      const options = [
        {
          id: 'vanilla',
          label: 'vanilla',
          name: 'vanilla',
          value: 'vanilla',
          img: 'https://www.thespruceeats.com/thmb/u8dsSvqz5Mkt0FyP7ETzwljamSQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/no-cook-vanilla-ice-cream-recipe-1945802-hero-01-cbd4c64c079b4caebe3f3e9add94ff9a.jpg',
        },
        {
          id: 'chocolate',
          label: 'chocolate',
          name: 'chocolate',
          value: 'chocolate',
          img: 'https://www.thespruceeats.com/thmb/KyWpKNdzCXtBXiA96QlJaAU05c0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-chocolate-ice-cream-recipe-1945798-hero-01-45d9f26a0aaf4c1dba38d7e0a2ab51e2.jpg',
        },
        {
          id: 'strawberry',
          label: 'strawberry',
          name: 'strawberry',
          value: 'strawberry',
          img: 'https://www.seriouseats.com/thmb/SYI6WMkX-fhBQFGT20B3LimaJlQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__07__20150706-strawberry-ice-cream-vicky-wasik-4-f3453966ec94404aaf44da724aef978b.jpg',
        },
        {
          id: 'mint',
          label: 'mint',
          name: 'mint',
          value: 'mint',
          img: 'https://www.thespruceeats.com/thmb/qQb20E3wIirOZ8ilVfz-ImStswA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MintIceCreamHERO-color-corrected-df1d9b72aaeb41d38502f435fe99f65d.jpg',
        },
      ];
      return (
        <Box direction={{ base: 'column', tablet: 'row' }} gap="md">
          {options.map((option, index) => (
            <OptionTile
              key={option.id}
              hideInput
              padding="0"
              gap="0"
              direction="column"
              isSelected={option.value === selectedOption}
              onChange={event => setSelectedOption(event.target.value)}
              id={option.id}
              name={option.name}
              value={option.value}
              background={
                option.value === selectedOption
                  ? 'secondary-lightest'
                  : undefined
              }
              borderColor={
                option.value === selectedOption ? 'secondary' : undefined
              }
              hover={{ shadow: 'lg' }}
            >
              <img
                src={option.img}
                style={{ objectFit: 'cover', width: '100%', height: '100px' }}
              />
              <p className="p-md font-family-brand">{option.label}</p>
            </OptionTile>
          ))}
        </Box>
      );
}