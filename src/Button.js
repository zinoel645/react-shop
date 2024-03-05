import clsx from "clsx";

export default function Button(props) {
  const { children, outline, className, ...rest } = props;
  const classes = clsx(
    {
      btn: true,
      "btn-default": !outline,
      "btn-outline": outline,
    },
    className
  );

  return (
    <button className={classes} {...rest}>
        {children}
    </button>
  )
}
