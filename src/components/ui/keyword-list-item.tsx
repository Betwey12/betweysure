interface KeywordListItemProps {
  keyword: string;
  value: string;
}

export default function KeywordListItem({
  keyword,
  value,
}: KeywordListItemProps) {
  return (
    <li>
      <strong>{keyword}</strong> {value}
    </li>
  );
}
