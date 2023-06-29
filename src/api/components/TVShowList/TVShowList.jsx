import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../../config";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <>
      <div className={s.title}>Vous pourriez aussi aimer</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={s.tv_show_list_item}>
              <TVShowListItem onClick={onClickItem} tvShow={tvShow} />
            </span>
          );
        })}
      </div>
    </>
  );
}
