export interface ISampleInputProps {
  label: string;
  type: 'text' | 'number';
  className?: string;
}

export const SampleInput = (props: ISampleInputProps) => {
  const { label, type, className } = props;

  return (
    <div className={className}>
      <label>{label}</label>
      <input type={type} />
    </div>
  );
};
