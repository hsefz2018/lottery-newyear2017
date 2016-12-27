type 	tStudent=record
	year:integer;
	class:integer;
	number:integer;
	name:string;
end;
var 	data:array[170000..199999] of tStudent;
	i,pointer,section,tmpnum:longint;
	str:ansistring;
begin
	assign(input,'2019.in');reset(input);
	repeat
		readln(str);
		str:=str+',';
		section:=1;
		pointer:=0;
		tmpnum:=0;
		repeat
			inc(pointer);
			if str[pointer]=',' then inc(section);
			if section>4 then begin
				section:=1;
				data[tmpnum mod 1000000].year:=(tmpnum div 10000)mod 10000;
				data[tmpnum mod 1000000].class:=(tmpnum div 100)mod 100;
				data[tmpnum mod 1000000].number:=tmpnum mod 100;
				writeln('data.year=',data[tmpnum mod 1000000].year,' data.class=',data[tmpnum mod 1000000].class,' tmpnum=',tmpnum,' name=',data[tmpnum mod 1000000].name);
				tmpnum:=0;
			end;
			if (section=1)and(str[pointer]<>',') then tmpnum:=tmpnum*10+ord(str[pointer])-48;
			if (section=2)and(str[pointer]<>',') then data[tmpnum mod 1000000].name:=data[tmpnum mod 1000000].name+str[pointer];
		until pointer=length(str);
	until eof;
	assign(input,'2018.in');reset(input);
	repeat
		readln(str);
		str:=str+',';
		section:=1;
		pointer:=0;
		tmpnum:=0;
		repeat
			inc(pointer);
			if str[pointer]=',' then inc(section);
			if section>2 then begin
				section:=1;
				data[tmpnum mod 1000000].year:=(tmpnum div 10000)mod 10000;
				data[tmpnum mod 1000000].class:=(tmpnum div 100)mod 100;
				data[tmpnum mod 1000000].number:=tmpnum mod 100;
				writeln('data.year=',data[tmpnum mod 1000000].year,' data.class=',data[tmpnum mod 1000000].class,' tmpnum=',tmpnum,' name=',data[tmpnum mod 1000000].name);
				tmpnum:=0;
			end;
			if (section=1)and(str[pointer]<>',') then tmpnum:=tmpnum*10+ord(str[pointer])-48;
			if (section=2)and(str[pointer]<>',') then data[tmpnum mod 1000000].name:=data[tmpnum mod 1000000].name+str[pointer];
		until	pointer=length(str);
	until eof;
	assign(input,'2017.in');reset(input);
	repeat
		readln(str);
		str:=str+',';
		section:=1;
		pointer:=0;
		tmpnum:=0;
		repeat
			inc(pointer);
			if str[pointer]=',' then inc(section);
			if section>2 then begin
				section:=1;
				data[tmpnum mod 1000000].year:=(tmpnum div 10000)mod 10000;
				data[tmpnum mod 1000000].class:=(tmpnum div 100)mod 100;
				data[tmpnum mod 1000000].number:=tmpnum mod 100;
				writeln('data.year=',data[tmpnum mod 1000000].year,' data.class=',data[tmpnum mod 1000000].class,' tmpnum=',tmpnum,' name=',data[tmpnum mod 1000000].name);
				tmpnum:=0;
			end;
			if (section=1)and(str[pointer]<>',') then tmpnum:=tmpnum*10+ord(str[pointer])-48;
			if (section=2)and(str[pointer]<>',') then data[tmpnum mod 1000000].name:=data[tmpnum mod 1000000].name+str[pointer];
		until	pointer=length(str);
	until eof;
	close(input);
	assign(output,'javascript.out');rewrite(output);
	for i:=170000 to 199999 do if data[i].name<>'' then writeln('new Student(',data[i].year,', ',data[i].class,', ',data[i].number,', ''',data[i].name,''', ''',i+120000000,'.png''),');
	close(output);
end.
