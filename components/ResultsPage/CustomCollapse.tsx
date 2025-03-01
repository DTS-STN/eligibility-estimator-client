export const CustomCollapse = (props) => {
  const { id, title, children, datacy } = props
  return (
    <details
      key={id}
      id={id}
      className="my-6 text-h6 bg-white border group"
      data-testid={`${id}-${props.dataTestId}`}
      data-cy={datacy}
    >
      <summary
        key={`summary-${id}`}
        className="border-none pl-0 ds-text-multi-blue-blue70b p-3 ds-cursor-pointer ds-select-none pl-4"
      >
        <span
          className="ml-[5px] group-open:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </summary>
      <div className="border p-4">{children}</div>
    </details>
  )
}
