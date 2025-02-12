import styled from 'styled-components';
import { Button } from '../../../shared/ui/Button/Button';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const categories = [
  { id: 1, name: 'Все' },
  { id: 2, name: 'Исламские мультфильмы' },
  { id: 3, name: 'Истории пророков' },
  { id: 4, name: 'Коран и его толкование' },
  { id: 5, name: 'Дуа и зикры' },
  { id: 6, name: 'Нравственные уроки' },
  { id: 7, name: 'Хадисы Пророка' },
];

const CategoryFilter = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: 'snap',
    loop: false,
    rubberband: true,
    slides: { perView: 'auto', spacing: 0 },
  });

  return (
    <CategoriesWrapper>
      <CategoriesContainer ref={sliderRef} className="keen-slider">
        {categories.map((item) => (
          <Button
            key={item.id}
            className="keen-slider__slide"
            customVariant="secondary"
          >
            {item.name}
          </Button>
        ))}
      </CategoriesContainer>
    </CategoriesWrapper>
  );
};

export default CategoryFilter;

const CategoriesWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0px;

  :first-child {
    margin-left: 12px;
    margin-right: 8px;
  }

  .keen-slider__slide {
    flex-shrink: 1;
    min-width: fit-content;
  }
`;
